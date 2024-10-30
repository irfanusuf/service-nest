const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: String,
  email: String,
  password: String,
  profilepicUrl :String
});

module.exports = { User };
