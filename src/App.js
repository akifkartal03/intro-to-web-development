import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/AllRecipies";
import "./BrandFilter.css";
import "./App.css";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}
