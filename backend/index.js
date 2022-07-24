const express = require("express");
require("dotenv").config({ path: "./config/info.env" }); // config of env

const ConnectToMongo = require("./db.js");
const middleware = require("./middleware/fetchuserid.js");
ConnectToMongo();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("what the hell")
});


app.listen(process.env.port, () => {
  console.log(`listening on port http://localhost:${process.env.port}`);
});
// console.log(process.env.port)