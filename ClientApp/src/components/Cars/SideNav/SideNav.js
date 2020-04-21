import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fuel">Tankowanie</Link>
            </li>
            <li>
              <Link to="/services">Serwisowanie</Link>
            </li>
            <li>
              <Link to="/insurance">Ubezpieczenie i przeglądy</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
