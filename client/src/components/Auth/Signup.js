import React from "react";

export default function Signup() {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="SignupForm rounded  w-50
      //  d-flex justify-content-between
       "
      >
        <div className="w-50">
          <h2 className="Signup">Sign up</h2>

          <form className="d-flex flex-column">
            <div className="input-container">
              <label htmlFor="name">
                <span class="material-icons" id="input-label">
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
                <span class="material-icons" id="input-label">
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
                <span class="material-icons" id="input-label">
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
                <span class="material-icons" id="input-label">
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
                <span class="material-icons" id="input-label">
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
                <span class="material-icons" id="input-label">
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
              <input type="submit" name="signup" id="singupBtn" value="register"/>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  );
}
