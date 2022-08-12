const jwt = require("jsonwebtoken");
// require("dotenv").config({ path: "../config/info.env" });
const User = require("../models/UserSchema");

async function fetchuserid(req, res, next){
  try {
    // console.log("Middleware");
    
    const authtoken = req.header("Authtoken");
    // console.log("Authtoken: ",authtoken);

    if (authtoken) {
      const VerifyJWT = jwt.verify(
        authtoken,
        "ermapshisagoodb%oy$ermapshisagoodb%oy$"
      );
      // console.log("verified", VerifyJWT);
      req.userId = VerifyJWT._id;
      next();

    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (error) {
    res.status(401).json({ Msg: "Unauthorized", Error: error });
  }
};

module.exports = fetchuserid;
