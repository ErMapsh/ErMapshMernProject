import React from "react";
import { NavLink } from "react-router-dom";
import User from "../../images/Loginuser.jpg";
import "../../styles/Login.css";

export default function Login() {
  return (
    <div
      style={{
        // height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="SignupForm">
        <div id="Signup-image">
          <img src={User} alt="Registration" id="image-size" />
            <NavLink to="/signup" className="my-1" id="createAccount">
              Create a account
            </NavLink>
        </div>
        <div id="formWidth">
          <form id="FormPoperty">
            <h2 className="Signup">Login</h2>

            <div className="input-container">
              <label htmlFor="email">
                <span className="material-icons" id="input-label">
                  mail
                </span>
              </label>
              <input
                type="email"
                id="input"
                autoComplete="off"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-container">
              <label htmlFor="password">
                <span className="material-icons" id="input-label">
                  lock
                </span>
              </label>
              <input
                type="password"
                id="input"
                autoComplete="off"
                name="password"
                placeholder="Enter your Password"
                required
              />
            </div>

            <div>
              <input type="submit" name="login" id="singupBtn" value="login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
