import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo3.png";

export default function Navbar() {
  let location = useLocation();
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light px-1 py-0 fixed-top ${
          location.pathname === "/" ? "bg-light" : ""
        }`}
      >
        <Link className="navbar-brand" exact="true" to="/">
          <img src={logo} style={{ height: "40px" }} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li>
              <Link
                className={`nav-link font-weight-normal ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                exact="true"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link font-weight-normal ${
                  location.pathname === "/about" ? "active" : ""
                } `}
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link font-weight-normal ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                exact="true"
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link font-weight-normal ${
                  location.pathname === "/login" ? "active" : ""
                }`}
                exact="true"
                to="/login"
              >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link font-weight-normal ${
                  location.pathname === "/signup" ? "active" : ""
                }`}
                exact="true"
                to="/signup"
              >
                Registration
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
