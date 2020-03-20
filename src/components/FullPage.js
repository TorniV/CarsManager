import React, { Component } from "react";
import Routes from "../Routes";
import PageTop from "./PageTop/PageTop";

class FullPage extends Component {
  render() {
    return (
      <div>
        <PageTop />
        <Routes />
        <footer
          style={{
            clear: "both",
            position: "relative",
            height: "20px",
            marginTop: "-20px"
          }}
        >
          Cars Manager By Tornado @2020
        </footer>
      </div>
    );
  }
}

FullPage.defaultProps = {};

export default FullPage;
