import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCar: props.carsList[0], carsList: props.carsList };
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

  Loading() {
    return <span>Loading...</span>;
  }

  render() {
    let url = this.props.match.url;

    return (
      <div className="side-nav">
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
              <Link to={`${url}/${this.state.selectedCar.id}`}>Home</Link>
            </li>
            <li>
              <Link to={`${url}/${this.state.selectedCar.id}/fuel`}>
                Tankowanie
              </Link>
            </li>
            <li>
              <Link to={`${url}/${this.state.selectedCar.id}/services`}>
                Serwisowanie
              </Link>
            </li>
            <li>
              <Link to={`${url}/${this.state.selectedCar.id}/insurance`}>
                Ubezpieczenie i przeglądy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export const SideNavWithRouter = withRouter(SideNav);
