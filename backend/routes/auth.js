const express = require("express");
const { validationResult, body } = require("express-validator");
const { exists } = require("../models/UserSchema");
const router = express.Router();
const User = require("../models/UserSchema");

// https://localhost:3000/api/auth/register
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
      console.log(error);
      if (!error.isEmpty()) {
        return res
          .status(400)
          .json({ success: false, error: "Invalid Credentials" });
      }

      const exists = await User.findOne({ email: email });
      if (exists) {
        res.status(422).json({ success: false, error: "Email alreay Exists" });
      }

      const PhoneExist = await User.findOne({ phone: phone });
      if (PhoneExist) {
        res.status(422).json({
          success: false,
          error: "Mobile Number already Exist, Use Another One",
        });
      }

      userinfo = await User.create({
        username,
        email,
        phone,
        work,
        password,
        Cpassword,
      });

      await userinfo.save();

      res.json({
        Success: true,
        message: "Registration/Signup Successful",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        msg: "Internal Server Error Occur",
        error: err,
      });
    }
  }
);

router.post("/login", (req, res) => {});
module.exports = router;
