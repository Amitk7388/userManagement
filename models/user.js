const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: String,
    username: { type: String, unique: true, required: true },
    countryCode: Number,
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    avatar: String,
    password: {type: String, required: true },
    timezone: String,
  },
  { timestamps: true }
);


module.exports = mongoose.model("user", UserSchema)