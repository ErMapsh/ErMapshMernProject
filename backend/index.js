const express = require("express");
require("dotenv").config({ path: "./config/info.env" }); // config of env

const ConnectToMongo = require("./db.js");
const middleware = require("./middleware/fetchuserid.js");
ConnectToMongo();

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("what the fuck u want mf");
});

app.get("/about", middleware, (req, res) => {
  res.send("what the about");
});

app.get("/contact", middleware, (req, res) => {
  res.send("what the contact");
});

app.listen(process.env.port, () => {
  console.log(`listening on port http://localhost:${process.env.port}`);
});
// console.log(process.env.port)
