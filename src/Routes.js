import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Car" render={() => <h1>Car</h1>} />
          <Route exact path="/Costs" render={() => <h1>Costs</h1>} />
          <Route path="/" render={() => <h1>404 - Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
