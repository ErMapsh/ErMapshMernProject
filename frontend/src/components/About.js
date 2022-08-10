import React from "react";
import "../styles/About.css";

export default function About() {
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
            <span className="Name">Mahesh Mestri</span>
            <span className="Work">Web Developer</span>
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
                  className="nav-link active bold"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#timeline"
                  id="profile-tab"
                  role="tab"
                  className="nav-link"
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
          <div className="">fsfsfsf223434</div>
          <div className="">Mahesh Mestri</div>
          <div className="">Maheshmestri73@gmail.com</div>
          <div className="">9405135389</div>
          <div className="">Software Engineer</div>
        </div>
      </div>
    </div>
  );
}
