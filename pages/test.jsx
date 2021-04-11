import React, { Fragment, useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import CustomTabs from "../components/CustomTabs/CustomTabs.js";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
  query Query {
    libraries {
      books {
        id
        author {
          name
        }
      }
    }
  }
`;

const USERS = gql`
  query Query {
    cats {
      name
    }
  }
`;

const IMAGES = gql`
  query Query {
    images {
      id
      title
      url
    }
  }
`;

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <Fragment>
      <div role="navigation">
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="AngelBernal"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />

        <Parallax
          filter
          responsive
          image={require("assets/img/landing-bg.jpg")}
        >
          <div role="main" className={classes.container}>
            <GridContainer>
              <HeroContent />
            </GridContainer>
          </div>
        </Parallax>
      </div>
      <div className="mt-10">
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className="pt-4">
              <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                      Transactions
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      A better way to send money
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                      Lorem ipsum dolor sit amet consect adipisicing elit.
                      Possimus magnam voluptatum cupiditate veritatis in
                      accusamus quisquam.
                    </p>
                  </div>
                </div>
              </div>
              <ImageList />
            </div>
            <div role="contentinfo">
              <ProductSection />
              {/* <Books></Books>
              <Users></Users> */}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div></div>
    </Fragment>
  );
}

function Books() {
  const { loading, error, data } = useQuery(BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.libraries.map((library) =>
    library.books.map((book) => {
      console.log(book.id);
      return (
        <div key={book.id}>
          <div>{book.author.name}</div>
        </div>
      );
    })
  );
}

function Users() {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return <div>hello</div>;
}

function ImageCard({ images }) {
  const { id, title, url } = images;
  console.log("IMAGE" + title);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={id}>
      <img alt="" className="w-full" src={url}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2"></div>
        <ul>
          <li className="font-bold text-black text-sm mb-2">
            <strong>{title}:</strong> 400
          </li>
          <li className="font-bold text-black text-sm mb-2">
            <strong>Price:</strong> 400
          </li>
          <li className="font-bold text-black text-sm mb-2">
            <strong>Details:</strong> 400
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
      </div>
    </div>
  );
}

function ImageList() {
  const { loading, error, data } = useQuery(IMAGES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.images);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4">
        {data.images.map((image) => (
          <ImageCard images={image} key={image.id} />
        ))}
      </div>
    </div>
  );
}

function HeroContent() {
  const classes = useStyles();
  return (
    <Fragment>
      <GridItem xs={12} sm={6} md={5}>
        <div className="py-10">
          <h1 className={classes.title}>
            Collect your favorite NFT Art on Cardano!.
          </h1>
          <p>
            We aim to help improve the world along with the cardano blockchain,
            allowing Artists, Investors and Collectors the opportunity to mint
            their collections on this explosion of interest in NFTS.
          </p>
          <br></br>
          <p>
            Each of these unique and very rare Limited Edition "oleo paintings"
            Art based is being minted on the Cardano Blockchain as a Non
            Fungible Token (NFT).
          </p>
        </div>
      </GridItem>
      <GridItem xs={12} sm={6} md={7}>
        <div className="py-42">
          <CustomTabs
            headerColor="primary"
            tabs={[
              {
                tabName: "Buy",
                tabIcon: Face,
                tabContent: (
                  <p className={classes.textCenter}>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                ),
              },
              {
                tabName: "NFT's",
                tabIcon: Chat,
                tabContent: (
                  <p className={classes.textCenter}>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. I will be the leader of a company that ends up
                    being worth billions of dollars, because I got the answers.
                    I understand culture. I am the nucleus. I think that’s a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.
                  </p>
                ),
              },
              {
                tabName: "Sell",
                tabIcon: Build,
                tabContent: (
                  <p className={classes.textCenter}>Coming Soon...</p>
                ),
              },
            ]}
          />
        </div>
      </GridItem>
    </Fragment>
  );
}
