import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { CarsService } from "../../../services/CarsService";

const SideNavMenu = ({ selectedCar, url, carsList, handleChange }) => {
  if (selectedCar) {
    return (
      <div>
        <select
          className="form-select"
          onChange={handleChange}
          style={{ marginBottom: "5px" }}
        >
          {carsList.map((car, id) => (
            <option key={id} value={car.id}>
              {car.model}
            </option>
          ))}
        </select>
        <nav>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action list-group-item-dark">
              <Link to={`${url}/${selectedCar.id}`} style={{ color: "black" }}>
                Home
              </Link>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark">
              <Link
                to={`${url}/${selectedCar.id}/fuel`}
                style={{ color: "black" }}
              >
                Tankowanie
              </Link>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark">
              <Link
                to={`${url}/${selectedCar.id}/services`}
                style={{ color: "black" }}
              >
                Serwisowanie
              </Link>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark">
              <Link
                to={`${url}/${selectedCar.id}/insurance`}
                style={{ color: "black" }}
              >
                Ubezpieczenie i przeglądy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return "Brak dostępnych samochodów";
  }
};

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCar: props.carsList[0],
      carsList: props.carsList,
    };
  }

  addCar = () => {
    CarsService.AddCar(this.onCarAdded);
  };

  onCarAdded = (result) => {
    console.log("Car added successfully");
  };

  handleChange = (event) => {
    let selectedCar = this.state.carsList.find((car) => {
      return car.id === event.target.value;
    });
    this.setState({
      selectedCar: selectedCar,
    });
    this.props.onCarChange(selectedCar);
  };

  render() {
    let url = this.props.match.url;

    return (
      <div className="side-nav">
        <button
          className="btn btn-dark"
          style={{ marginBottom: "5px" }}
          onClick={this.addCar}
        >
          Dodaj
        </button>
        <SideNavMenu
          selectedCar={this.state.selectedCar}
          url={url}
          carsList={this.state.carsList}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export const SideNavWithRouter = withRouter(SideNav);
