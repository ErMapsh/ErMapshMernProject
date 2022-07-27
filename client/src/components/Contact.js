import React from "react";
import phone from "../images/smartphone2png";
import address from "../images/address.png";
import email from "../images/mail.png";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="">
        <div id="ThreeBox">
          <div className="box">
            <div>
              <img src={phone} alt="phone" />
            </div>
            <div className="label-and-info">
              <div className="box-label">
                <label>Phone</label>
              </div>
              <div>
                <span>+91 9405135389</span>
              </div>
            </div>
          </div>

          <div className="box">
            <div>
              <img src={email} alt="email" />
            </div>
            <div className="label-and-info">
              <div className="box-label">
                <label>Email</label>
              </div>
              <div>
                <span>ermapsh@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="box">
            <div>
              <img src={address} alt="address" />
            </div>
            <div className="label-and-info">
              <div className="box-label">
                <label>Address</label>
              </div>
              <div>
                <span>Pune, Hinjawadi</span>
              </div>
            </div>
          </div>
        </div>

        <div id="GetInTouch"> 
          <form>
            <div>
              <span id="GetInTouchText">Get in touch</span>
            </div>
            <div className="ThreeInputs">
              <div>
                <input type="text" placeholder="Your name" name="username" />
              </div>
              <div>
                <input type="email" placeholder="Your email" name="useremail" />
              </div>
              <div>
                <input
                  type="phone"
                  placeholder="Your phone number"
                  name="yourphonenumber"
                />
              </div>
            </div>
            <div id="TextArea">
              <textarea placeholder="Message" rows="4" />
            </div>

            <div className="submitBtn">
              <input
                type="submit"
                name="GetTouchwithSubmit"
                id="SubmitBtn"
                value="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
