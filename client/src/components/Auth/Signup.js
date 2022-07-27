import React from "react";
import { NavLink } from "react-router-dom";
import User from "../../images/User2.jpg";

export default function Signup() {
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
        <div id="formWidth">
          <form id="FormPoperty">
            <h2 className="Signup">Sign up</h2>
            <div className="input-container">
              <label htmlFor="name">
                <span className="material-icons" id="input-label">
                  person
                </span>
              </label>
              <input
                type="text"
                id="input"
                autoComplete="off"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

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
              <label htmlFor="phone">
                <span className="material-icons" id="input-label">
                  phone
                </span>
              </label>
              <input
                type="phone"
                id="input"
                autoComplete="off"
                name="phone"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <div className="input-container">
              <label htmlFor="work">
                <span className="material-icons" id="input-label">
                  work
                </span>
              </label>
              <input
                type="text"
                id="input"
                autoComplete="off"
                name="work"
                placeholder="Enter your profession"
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

            <div className="input-container">
              <label htmlFor="Cpassword">
                <span className="material-icons" id="input-label">
                  lock
                </span>
              </label>
              <input
                type="password"
                id="input"
                autoComplete="off"
                name="Cpassword"
                placeholder="Confirm your Password"
                required
              />
            </div>

            <div>
              <input
                type="submit"
                name="signup"
                id="singupBtn"
                value="register"
              />
            </div>
          </form>
        </div>

        <div id="Signup-image">
          <img src={User} alt="Registration image" id="image-size"/>
          <NavLink to="/login" className="my-1" id="allreadyRegister">
            I am already register
          </NavLink>
        </div>
      </div>
    </div>
  );
}
