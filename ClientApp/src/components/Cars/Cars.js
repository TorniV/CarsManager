import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { SideNavWithRouter } from "./SideNav/SideNav";
import { DashBoard } from "./Pages/Dashboard";
import { Fuel } from "./Pages/Fuel";
import { Services } from "./Pages/Services";
import { Insurance } from "./Pages/Insurance";
import { CarsService } from "../../services/CarsService";

class Cars extends Component {
  constructor() {
    super();
    this.state = { selectedCar: 1 };
  }

  componentDidMount() {
    CarsService.GetCars(this.onCarsReceived);
  }

  onCarsReceived = (cars) => {
    console.log("API: ", cars);
  };

  handleCarChange = (newSelectedCar) => {
    this.setState({
      selectedCar: newSelectedCar,
    });
  };

  render() {
    let url = this.props.match.url;

    return (
      <div className="cars-page">
        <SideNavWithRouter
          id={this.state.selectedCar}
          onCarChange={this.handleCarChange}
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
