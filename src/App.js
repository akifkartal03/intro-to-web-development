import React, { useEffect, useState } from "react";
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
import {setUSer} from './redux/actions/LoginAction';
import { useStore } from "./redux/store/Provider";
const App = () => {
  const [store,dispatch] = useStore();
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("loginState"));
    if(localData.isLogged){
      dispatch(setUSer(localData.user));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("loginState",JSON.stringify(store));
    console.log(store);
  });
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Main} />
        <Route path="/login2" component={Login5} />
        <Route path="" component={Redirect} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
