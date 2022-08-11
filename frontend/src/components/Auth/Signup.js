import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import UserImage from "../../images/User2.jpg";
import "../../styles/SignPage.css";

export default function Signup() {
  const navigate = useNavigate();
  const [User, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    Cpassword: "",
  });

  const HandleOnChange = (event) => {
    let name, value;
    name = event.target.name;
    value = event.target.value;
    setUser({ ...User, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { username, email, phone, work, password, Cpassword } = User;
    // console.log(User)

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        phone: phone,
        work: work,
        password: password,
        Cpassword: Cpassword,
      }),
    });

    let json = await res.json();
    // console.log(json);
    if (json.Success === true) {
      window.alert(json.Msg);
      navigate("/login");
    } else {
      // window.alert("Something Went Wrong");
      console.log(json.Msg)
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
        <div id="formWidth">
          <form id="FormPoperty" >
            <h2 className="Signup">Sign up</h2>
            <div className="input-container">
              <label htmlFor="name">
                <span className="material-icons" id="input-label">
                  person
                </span>
              </label>
              <input
                type="text"
                className="input"
                autoComplete="off"
                name="username"
                onChange={HandleOnChange}
                value={User.name}
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
                className="input"
                autoComplete="off"
                name="email"
                onChange={HandleOnChange}
                value={User.email}
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
                className="input"
                autoComplete="off"
                name="phone"
                onChange={HandleOnChange}
                value={User.phone}
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
                className="input"
                autoComplete="off"
                name="work"
                onChange={HandleOnChange}
                value={User.work}
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
                className="input"
                autoComplete="off"
                name="password"
                onChange={HandleOnChange}
                value={User.password}
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
                className="input"
                autoComplete="off"
                name="Cpassword"
                onChange={HandleOnChange}
                value={User.Cpassword}
                placeholder="Confirm your Password"
                required
              />
            </div>

            <div>
              <input
                type="submit"
                name="signup"
                id="singupBtn"
                onClick={PostData}
                value="register"
              />
            </div>
          </form>
        </div>

        <div id="Signup-image">
          <img src={UserImage} alt="Registration" id="image-size" />
          <NavLink to="/login" className="my-1" id="allreadyRegister">
            I am already register
          </NavLink>
        </div>
      </div>
    </div>
  );
}
