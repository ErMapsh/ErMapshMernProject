const mongoose = require("mongoose");
require("dotenv").config({ path: "../config/info.env" });

const MongoUrl = `mongodb+srv://${process.env.MongoUrlUsername}:${process.env.MongoUrlPass}@ermapsh.fu0vfpq.mongodb.net/${process.env.DB}`;

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
