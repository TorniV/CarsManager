import React, { Component } from "react";
export class Fuel extends Component {
  render() {
    return (
      <div>
        <h2>Tankowanie dla {this.props.id}</h2>
      </div>
    );
  }
}
