const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: Number,
    unique: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Cpassword: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("USERS", UserSchema);
module.exports = User;
