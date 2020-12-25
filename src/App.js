import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/AllRecipies/Header";
import Footer from "./components/AllRecipies/Footer";
import HomePage from "./components/AllRecipies/AllRecipies";
import Login from "./components/Login2/Main";
import Login2 from "./components/Login/Login5";
import "./BrandFilter.css";
import "./App.css";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" omponent={Login} />
          <Route path="/login2" component={Login2} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
