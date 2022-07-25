const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../config/info.env" });

const middleware = (req, res, next) => {
  console.log("Middleware\n");
  const { authtoken } = req.header("auth-token");

  if (!authtoken) {
    res.status(401).send({ error: "Unauthorized" });
  }

  try {
    const verification = jwt.verify(authtoken, process.env.JWT_SECRET_KEY);
    console.log("verified", verification);
    req.user = verification.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorized" });
  }
};

module.exports = middleware;
