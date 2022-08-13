const mongoose = require("mongoose");
require("dotenv").config({ path: "../config/info.env" });

const MongoUrl = process.env.DBURL;

const ConnectToMongo = async () => {
  //   mongoose.connect(MongoUrl, () => {
  //     console.log("connected to Mongo Successfully");
  //   });

  mongoose
    .connect(MongoUrl)
    .then(() => {
      console.log("connected to Mongo Successfully");
    })
    .catch((err) => {
      console.log("--No Connection--\n", err);
    });
};

module.exports = ConnectToMongo;
