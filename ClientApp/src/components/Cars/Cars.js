import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { SideNavWithRouter } from "./SideNav/SideNav";
import { DashBoard } from "./Pages/Dashboard";
import { Fuel } from "./Pages/Fuel";
import { Services } from "./Pages/Services";
import { Insurance } from "./Pages/Insurance";

class Cars extends Component {
  constructor() {
    super();
    this.state = { selectedCar: 1 };
  }

  render() {
    let url = this.props.match.url;
    function handleCarChange(newSelectedCar) {
      this.setState({
        selectedCar: newSelectedCar,
      });
    }

    return (
      <div className="cars-page">
        <SideNavWithRouter
          id={this.state.selectedCar}
          onCarChange={handleCarChange.bind(this)}
        />
        <Switch>
          <Route path={`${url}/:selectedCar/fuel`}>
            <Fuel id={this.state.selectedCar} />
          </Route>
          <Route path={`${url}/:selectedCar/services`}>
            <Services />
          </Route>
          <Route path={`${url}/:selectedCar/insurance`}>
            <Insurance />
          </Route>
          <Route exact path={`${url}/:selectedCar`}>
            <DashBoard />
          </Route>
        </Switch>
      </div>
    );
  }
}

export const CarsWithRouter = withRouter(Cars);
