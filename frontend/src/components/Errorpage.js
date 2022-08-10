import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Error.css";

export default function Errorpage() {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1 className="">404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p className="mb-5">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <NavLink to="/" className="btn btn-primary">Back To Homepage</NavLink>
        </div>
      </div>
    </>
  );
}
