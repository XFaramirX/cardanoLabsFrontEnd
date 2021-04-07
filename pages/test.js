import React from "react";
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
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

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

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-blue-500 rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-black">ChitChast</div>
          <p className="text-black">You have a new message!</p>
        </div>
      </div>
      <Books></Books>
    </div>
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
