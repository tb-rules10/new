const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.home = (req, res, next) => {
  res.send("Server HOME");
};

module.exports.register = async (req, res, next) => {
  console.log(req.body);
};

module.exports.login = async (req, res, next) => {
  console.log(req.body);
};
