import React from "react";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
export function SideNav() {
  let { url } = useRouteMatch();
  return (
    <div className="side-nav">
      <nav>
        <ul>
          <li>
            <Link to={`${url}`}>Home</Link>
          </li>
          <li>
            <Link to={`${url}/fuel`}>Tankowanie</Link>
          </li>
          <li>
            <Link to={`${url}/services`}>Serwisowanie</Link>
          </li>
          <li>
            <Link to={`${url}/insurance`}>Ubezpieczenie i przeglądy</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
