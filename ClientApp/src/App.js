import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { Cars } from "./components/Cars/Cars";
import { Costs } from "./components/Costs/Costs";
import { Contact } from "./components/Contact/Contact";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/cars" component={Cars} />
        <Route path="/costs" component={Costs} />
        <Route path="/contact" component={Contact} />
      </Layout>
    );
  }
}
