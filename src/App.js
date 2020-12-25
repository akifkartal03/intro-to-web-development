import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/AllRecipies/Header";
import Footer from "./components/AllRecipies/Footer";
import HomePage from "./components/AllRecipies/AllRecipies";
import Main from "./components/Login2/Main";
import Login5 from "./components/Login/Login5";
import Redirect from "./components/Redirect";
import "./BrandFilter.css";
import "./App.css";
import { StateProvider } from "./redux/store/Provider";
import {initialState,reducer} from './redux/reducers/LoginReducer';
export default class Example extends React.Component {
  render() {
    return (
      <div>
        <StateProvider reducer={reducer} initialValue={initialState}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Main} />
          <Route path="/login2" component={Login5} />
          <Route path="" exact component={Redirect} />
        </Switch>
        <Footer />
        </StateProvider>
      </div>
    );
  }
}
