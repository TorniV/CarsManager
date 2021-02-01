import React, { Component } from "react";

export class DashBoard extends Component {
  CarDetails(car) {
    return (
      <table className="table table-dark table-borderless">
        <tbody>
          <tr>
            <th scope="row">Marka</th>
            <td>{car.make}</td>
          </tr>
          <tr>
            <th scope="row">Model</th>
            <td>{car.model}</td>
          </tr>
          <tr>
            <th scope="row">Rocznik</th>
            <td>{car.year}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  CarDetailsMissing() {
    return <span>Brak danych</span>;
  }

  render() {
    let carDetails;
    if (this.props.car) {
      carDetails = this.CarDetails(this.props.car);
    } else {
      carDetails = this.CarDetailsMissing();
    }
    return (
      <div>
        <h2>Car dashboard</h2>
        {carDetails}
      </div>
    );
  }
}
