import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { CarsService } from "../../../services/CarsService";

const SideNavMenu = ({ selectedCar, url, carsList, handleChange }) => {
  if (selectedCar) {
    return (
      <div>
        <select onChange={handleChange}>
          {carsList.map((car, id) => (
            <option key={id} value={car.id}>
              {car.model}
            </option>
          ))}
        </select>
        <nav>
          <ul>
            <li>
              <Link to={`${url}/${selectedCar.id}`}>Home</Link>
            </li>
            <li>
              <Link to={`${url}/${selectedCar.id}/fuel`}>Tankowanie</Link>
            </li>
            <li>
              <Link to={`${url}/${selectedCar.id}/services`}>Serwisowanie</Link>
            </li>
            <li>
              <Link to={`${url}/${selectedCar.id}/insurance`}>
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
        <button className="btn btn-dark" onClick={this.addCar}>
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
