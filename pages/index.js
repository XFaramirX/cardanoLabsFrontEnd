import React, { Component } from "react";
import Router from "next/router";
global.fetch = require("node-fetch");

export default class Index extends Component {
  componentDidMount = () => {
    Router.push("/home");
  };

  render() {
    return <div />;
  }
}
