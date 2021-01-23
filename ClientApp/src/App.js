import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { CarsWithRouter } from "./components/Cars/Cars";
import { Costs } from "./components/Costs/Costs";
import { Contact } from "./components/Contact/Contact";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/cars">
              <CarsWithRouter />
            </Route>
            <Route path="/costs">
              <Costs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/fetch-data">
              <FetchData />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    );
  }
}
