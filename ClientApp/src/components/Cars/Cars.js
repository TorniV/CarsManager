import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { SideNav } from "./SideNav/SideNav";
import { DashBoard } from "./Pages/Dashboard";
import { Fuel } from "./Pages/Fuel";
import { Services } from "./Pages/Services";
import { Insurance } from "./Pages/Insurance";

export class Cars extends Component {
  render() {
    // const match = useRouteMatch();
    // let { path, url } = useRouteMatch();
    return (
      <div className="cars-page">
        <SideNav />
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
          {/* <Route path={"${path}/fuel"}>
            <Fuel />
          </Route>
          <Route path={"${path}/services"}>
            <Services />
          </Route>
          <Route path={"${path}/insurance"}>
            <Insurance />
          </Route>
          <Route exact path={path}>
            <DashBoard />
          </Route> */}
        </Switch>
      </div>
    );
  }
}
