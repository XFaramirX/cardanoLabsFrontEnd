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

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query Books {
        books {
          title
          author
        }
      }
    `,
  })
  .then((result) => console.log(result));

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12"
            src="/img/logo.svg"
            alt="ChitChat Logo"
          ></img>
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChast</div>
          <p className="text-blue-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}
