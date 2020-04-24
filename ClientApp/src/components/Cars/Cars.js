import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { SideNav } from "./SideNav/SideNav";
import { DashBoard } from "./Pages/Dashboard";
import { Fuel } from "./Pages/Fuel";
import { Services } from "./Pages/Services";
import { Insurance } from "./Pages/Insurance";

export function Cars() {
  let { path } = useRouteMatch();
  return (
    <div className="cars-page">
      <SideNav />
      <Switch>
        <Route path={`${path}/fuel`}>
          <Fuel />
        </Route>
        <Route path={`${path}/services`}>
          <Services />
        </Route>
        <Route path={`${path}/insurance`}>
          <Insurance />
        </Route>
        <Route exact path={path}>
          <DashBoard />
        </Route>
      </Switch>
    </div>
  );
}
