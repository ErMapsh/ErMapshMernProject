const express = require("express");
const { validationResult, body } = require("express-validator");
const router = express.Router();
const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../config/info.env" });

// https://localhost:3000/api/auth/register dosent require login
router.post(
  "/register",
  [
    body("username", "Name Must be at least 3 ").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("work", "Enter work").isLength({ min: 3 }),
    body("phone", "Enter a valid phone number").isMobilePhone(),
    body("password", "Password must be at least 8 ").isLength({ min: 8 }),
    body("Cpassword", "Password must be at least 8 ").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const { username, email, phone, work, password, Cpassword } = req.body;

    try {
      const error = validationResult(req);
      // console.log(error);

      if (!error.isEmpty()) {
        return res
          .status(400)
          .json({ Success: false, Msg: "Invalid Credentials" });
      }

      const EmailExist = await User.findOne({ email: email });
      if (EmailExist) {
        res.status(422).json({ Success: false, Msg: "Email already Exists" });
      }

      const PhoneExist = await User.findOne({ phone: phone });
      if (PhoneExist) {
        res.status(422).json({
          Success: false,
          Msg: "Mobile Number already Exist, Use Another One",
        });
      }

      const salt = await bcrypt.genSalt(10); //generating salt
      const securePass = await bcrypt.hash(password, salt);

      userinfo = await User.create({
        username: username,
        email: email,
        phone: phone,
        work: work,
        password: securePass,
        Cpassword: securePass,
      });
      await userinfo.save();

      // const payload = { user: { id: userinfo.id } };
      // const authtoken = jwt.sign(payload, process.env.JWT_SECRET_KEY);

      // console.log("Reg Succesfull\n");
      res.status(201).json({
        Success: true,
        Msg: "Registration/Signup Successful",
        // Authtoken: authtoken,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        Success: false,
        Msg: "Internal Server Error Occur",
      });
    }
  }
);

// https://localhost:3000/api/auth/login
router.post(
  "/login",

  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank ").exists(),
  ],

  async (req, res) => {
    const { email, password } = req.body;
    try {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        return (
          res
            .status(400)
            .json({ Success: false, Msg: "invalid Credentials" })
        );
      }

      let token;
      let UserInfo = await User.findOne({ email: email });

      if (!UserInfo) {
        res
          .status(401)
          .json({
            Success: false,
            Msg: "Please try to login with correct credentials",
          });
      }

      let PasswordCompare = await bcrypt.compare(password, UserInfo.password);
      // console.log(PasswordCompare)

      if (!PasswordCompare) {
        return res.status(401).json({
          Success: false,
          Msg: "Please try to login with correct credentials",
        });
      }

      token = await UserInfo.GenerateAuthToken();
      // console.log(token);

      // res.cookie("jwtoken", token, {
      //   expires: new Date(Date.now() + 25892000000),
      //   httpOnly: true,
      // });

      res.status(200).json({
        Success: true,
        Authtoken: token,
        Msg: "Successfully login...",
      });
    } catch (err) {
      // console.log("err");
      res.status(500).json({
        Success: false,
        Error: "Internal Server Error Occur",
      });
    }
  }
);

module.exports = router;
