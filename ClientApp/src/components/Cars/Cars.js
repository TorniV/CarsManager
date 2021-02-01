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
    this.state = { selectedCar: {}, carsList: [] };
  }

  componentDidMount() {
    CarsService.GetCars(this.onCarsReceived);
  }

  onCarsReceived = (cars) => {
    this.setState({
      carsList: cars,
    });
    this.setSelectedCar(cars[0]);
  };

  handleCarChange = (newSelectedCar) => {
    this.setSelectedCar(newSelectedCar);
  };

  setSelectedCar(newSelectedCar) {
    this.setState({
      selectedCar: newSelectedCar,
    });
  }

  render() {
    let url = this.props.match.url;

    return (
      <div className="cars-page">
        {this.state.carsList.length ? (
          <SideNavWithRouter
            carsList={this.state.carsList}
            onCarChange={this.handleCarChange}
          />
        ) : (
          "Ładowanie…"
        )}
        <Switch>
          <Route path={`${url}/:selectedCar/fuel`}>
            <Fuel id={this.state.selectedCar.id} />
          </Route>
          <Route path={`${url}/:selectedCar/services`}>
            <Services />
          </Route>
          <Route path={`${url}/:selectedCar/insurance`}>
            <Insurance />
          </Route>
          <Route exact path={`${url}/:selectedCar`}>
            <DashBoard car={this.state.selectedCar} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export const CarsWithRouter = withRouter(Cars);
