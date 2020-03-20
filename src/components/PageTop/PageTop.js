import React, { Component } from "react";
import { Link } from "react-router-dom";

class FullPage extends Component {
  render() {
    return (
      <div>
        <nav
          style={{ backgroundColor: "gray", color: "white", fontSize: "30px" }}
        >
          Cars Manager
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Car">Car</Link>
            </li>
            <li>
              <Link to="/Costs">Costs</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default FullPage;
