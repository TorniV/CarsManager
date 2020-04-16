import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SideNav } from "./SideNav/SideNav";
import { DashBoard } from "./Pages/Dashboard";
import { Fuel } from "./Pages/Fuel";
import { Services } from "./Pages/Services";
import { Insurance } from "./Pages/Insurance";

export class Cars extends Component {
  render() {
    return (
      <Router>
        <div className="cars-page">
          <SideNav />
          <div>
            <Switch>
              <Route path="/fuel">
                <Fuel />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/insurance">
                <Insurance />
              </Route>
              <Route path="/">
                <DashBoard />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
