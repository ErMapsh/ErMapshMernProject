import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo3.png";

export default function Navbar() {
  let location = useLocation();
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} style={{ height: "40px" }} alt="logo" />
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li>
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                exact
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                exact
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                exact
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/login" ? "active" : ""
                }`}
                exact
                to="/login"
              >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/singup" ? "active" : ""
                }`}
                exact
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
