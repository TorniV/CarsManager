import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { SideNavWithRouter } from "./SideNav/SideNav";
import { DashBoard } from "./Pages/Dashboard";
import { Fuel } from "./Pages/Fuel";
import { Services } from "./Pages/Services";
import { Insurance } from "./Pages/Insurance";

export function Cars() {
  let { path } = useRouteMatch();
  let selectedCar = 1;

  return (
    <div className="cars-page">
      <SideNavWithRouter id={selectedCar} />
      <h2>H2: {selectedCar} </h2>
      <Switch>
        <Route path={`${path}/:selectedCar/fuel`}>
          <Fuel id={selectedCar} />
        </Route>
        <Route path={`${path}/:selectedCar/services`}>
          <Services />
        </Route>
        <Route path={`${path}/:selectedCar/insurance`}>
          <Insurance />
        </Route>
        <Route exact path={`${path}/:selectedCar`}>
          <DashBoard />
        </Route>
      </Switch>
    </div>
  );
}
