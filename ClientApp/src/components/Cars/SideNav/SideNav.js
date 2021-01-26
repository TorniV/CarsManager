import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SideNav extends Component {
  constructor(props) {
    super();
    this.state = { selectedCar: props.id };
  }

  handleChange = (event) => {
    this.setState({
      selectedCar: event.target.value,
    });
    this.props.onCarChange(event.target.value);
  };

  render() {
    let url = this.props.match.url;

    return (
      <div className="side-nav">
        <select value={this.state.selectedCar} onChange={this.handleChange}>
          <option value="1">Focus</option>
          <option value="2">Mondeo</option>
          <option value="3">Seicento</option>
        </select>
        <nav>
          <ul>
            <li>
              <Link to={`${url}/${this.state.selectedCar}`}>Home</Link>
            </li>
            <li>
              <Link to={`${url}/${this.state.selectedCar}/fuel`}>
                Tankowanie
              </Link>
            </li>
            <li>
              <Link to={`${url}/${this.state.selectedCar}/services`}>
                Serwisowanie
              </Link>
            </li>
            <li>
              <Link to={`${url}/${this.state.selectedCar}/insurance`}>
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
