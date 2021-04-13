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
import Dialog from "@material-ui/core/Dialog";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

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
          brand="Cardanolab.art"
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
                      Welcome to CardanoLabs.Art
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      The NFT Marketplace.
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                      All Products
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

function ImageCard({ images }) {
  const classes = useStyles();
  const { id, title, url } = images;
  const [classicModal, setClassicModal] = React.useState(false);
  console.log("IMAGE" + title);
  return (
    <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative gallery-image">
      <img className="w-full" src={url} alt="" />
      <div className="badge absolute top-0 right-0 bg-indigo-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
        Sold
      </div>
      <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
        <span className="mr-1 p-1 px-2 font-bold">105 views</span>
        <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
          105 Likes
        </span>
        <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
          105 Dislikes
        </span>
      </div>
      <div className="desc p-4 text-gray-800">
        <a
          href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
          target="_new"
          className="title font-bold block cursor-pointer hover:underline"
        >
          Pubg Mobile Custom Room (Unlimited)
        </a>
        <a
          href="https://www.youtube.com/user/sam14319"
          target="_new"
          className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
        >
          @dynamo_gaming
        </a>
        <span className="description text-sm block py-2 border-gray-400 mb-2">
          lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !
        </span>
      </div>
      <style jsx>{`
        img {
          height: 300px;
          object-fit: contain;
        }
      `}</style>
      <style jsx global>{`
        p {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}

function ImageList() {
  const { loading, error, data } = useQuery(IMAGES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.images);
  return (
    <div className="">
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  <div>
                    <p className={classes.textCenter}>
                      Each of these unique and very rare Limited Edition
                      "paintings" Art based is being minted on the Cardano
                      Blockchain as a Non Fungible Token (NFT).
                    </p>
                    <br />
                    <p className={classes.textCenter}>
                      In collaborations with artist only 200 unique paintings
                      will be minted in cardano blockchain and only 10 extremely
                      rare items will come along with the real painting.
                    </p>
                    <br />
                    <p className={classes.textCenter}>
                      Send there the exact amount of ADA (not more, not less),
                      using your Yoroi / Daedalus wallet. Once we've confirm the
                      transaction you will recieve your nft in your wallet.
                    </p>
                  </div>
                ),
              },
              {
                tabName: "NFT's",
                tabIcon: Chat,
                tabContent: (
                  <div>
                    <p className={classes.textCenter}>
                      This NFT of the original paintings are highly collectable
                      'UNIQUE' investible assets that have emerged from the
                      Crypto Blockchain world and are growing rapidly. NFTs are
                      here to stay and will be the gold standard of provenance
                      in the future. Once created, they cannot be copied, forged
                      or manipulated and will last forever.
                    </p>
                    <br />
                    <p className={classes.textCenter}>
                      A non-fungible token (NFT) is a unit of data stored on a
                      digital ledger, called a blockchain, that certifies a
                      digital asset to be unique and therefore not
                      interchangeable.[1] NFTs can be used to represent items
                      such as photos, videos, audio and other types of digital
                      files. Access to any copy of the original file, however,
                      is not restricted to the buyer of the NFT. While copies of
                      these digital items are available for anyone to obtain,
                      NFTs are tracked on blockchains to provide the owner with
                      a proof of ownership that is separate from copyright.
                    </p>
                  </div>
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
