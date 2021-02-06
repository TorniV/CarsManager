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
            <th scope="row">Generacja</th>
            <td>{car.generation}</td>
          </tr>
          <tr>
            <th scope="row">Rocznik</th>
            <td>{car.year}</td>
          </tr>
          <tr>
            <th scope="row">Przebieg</th>
            <td>{car.mileage}</td>
          </tr>
          <tr>
            <th scope="row">Numer rejestracyjny</th>
            <td>{car.registrationNumber}</td>
          </tr>
          <tr>
            <th scope="row">Data pierwszej rejestracji</th>
            <td>{car.firstRegistration}</td>
          </tr>
          <tr>
            <th scope="row">VIN</th>
            <td>{car.vin}</td>
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
