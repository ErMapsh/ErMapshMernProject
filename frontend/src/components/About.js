import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

export default function About() {
  let navigate = useNavigate();
  const [userData, setuserData] = useState({});

  // console.log(localStorage.getItem("Authtoken"))
  const GetData = async () => {
    const res = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authtoken": localStorage.getItem("Authtoken"),
      },
    });

    try{
      const json = await res.json();
      console.log("data: ",json);
      const { _id, username, email, phone, work } = json.UserData;

      setuserData({
        "_id": _id,
        "username": username,
        "email": email,
        "phone": phone,
        "work": work,
      });

    }catch(err){
      console.log(err)
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("Authtoken")) {
      navigate("/login");
    }
    GetData();
    // eslint-disable-next-line
  }, []);
  console.log(userData)
  
  return (
    <div className="aboutBox">
      <div className="boxes">
        <div className="box1">
          <img
            src={require("../images/exampleProfile.jpeg")}
            alt="profile"
            style={{ width: "60%" }}
          />
        </div>

        <div className="box2">
          <div className="Userinfo">
            <span className="Name">
              {userData ? userData.username : "None"}
            </span>
            <span className="Work">{userData ? userData.work : "None"}</span>
            <div>
              Ranking:<span className="ranking"> 1/10</span>
            </div>
          </div>

          <div className="" style={{ marginTop: "30px" }}>
            <ul className="nav nav-tabs mb-3 bold" role="tablist">
              <li className="nav-item">
                <a
                  href="#about"
                  id="home-tab"
                  role="tab"
                  className="nav-link active font-weight-bold"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#timeline"
                  id="profile-tab"
                  role="tab"
                  className="nav-link font-weight-bold"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="box3">
          <span>
            <a href="#editprofile">Edit Profile</a>
          </span>
        </div>

        <div className="box4">
          <div>Youtuber</div>
          <div>Instagram</div>
          <div>ErMapsh</div>
          <div>Software Engineer</div>
        </div>

        <div className="box5">
          <div className="md">User Id</div>
          <div className="md">Name</div>
          <div className="md">Email</div>
          <div className="md">Phone</div>
          <div className="md">Profession</div>
        </div>
        <div className="box6">
          <div className="">{userData ? userData._id : "None"}</div>
          <div className="">{userData ? userData.username : "None"}</div>
          <div className="">{userData ? userData.email : "None"}</div>
          <div className="">{userData ? userData.phone : "None"}</div>
          <div className="">{userData ? userData.work : "None"}</div>
        </div>
      </div>
    </div>
  );
}
