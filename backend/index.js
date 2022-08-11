const express = require("express");
const app = express();
var cors = require('cors')
const ConnectToMongo = require("./db.js");
require("dotenv").config({ path: "./config/info.env" }); // config of env

app.use(cors())

// const middleware = require("./middleware/fetchuserid.js");  


ConnectToMongo();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("what the hell")
});
app.listen(5000, () => {
  console.log(`listening on port http://localhost:${5000}`);
});

// console.log(process.env.port)