import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

const SideNavMenu = ({ selectedCar, url }) => {
  if (selectedCar) {
    return (
      <div>
        <select onChange={this.handleChange}>
          {this.state.carsList.map((car, id) => (
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
        <SideNavMenu selectedCar={this.state.selectedCar} ulr={url} />
      </div>
    );
  }
}

export const SideNavWithRouter = withRouter(SideNav);
