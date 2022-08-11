import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import User from "../../images/Loginuser.jpg";
import "../../styles/Login.css";

export default function Login() {
  const [LoginInfo, setLoginInfo] = React.useState({ email: "", password: "" });
  let navigate = useNavigate();

  const HandleOnChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setLoginInfo({ ...LoginInfo, [name]: value });
    // console.log(LoginInfo)
  };

  const Login = async (event) => {
    event.preventDefault();
    let { email, password } = LoginInfo;
    
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      
    try {
      let json = await res.json();
      // console.log(json);

      if (json.Success === true) {
        window.alert(json.Msg);
        localStorage.setItem("Authtoken",  json.Authtoken);
        navigate("/");
      }else{
        window.alert(json.Msg)
      }
    } catch(e) {
      console.log("Something went wrong..",e );
    }
  };

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
                className="input"
                autoComplete="off"
                name="email"
                value={LoginInfo.email}
                onChange={HandleOnChange}
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
                className="input"
                onChange={HandleOnChange}
                autoComplete="off"
                name="password"
                min={8}
                value={LoginInfo.password}
                placeholder="Enter your Password"
                required
              />
            </div>

            <div>
              <input
                type="submit"
                name="login"
                id="singupBtn"
                value="login"
                disabled={LoginInfo.password >= 8}
                onClick={Login}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
