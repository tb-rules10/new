const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.home = (req, res, next) => {
  res.send("Server HOME");
};

module.exports.register = async (req, res, next) => {
  try{
    console.log(req.body);
    const {firstname, lastname, username, email, password} = req.body;
    const usernameCheck = await User.findOne({ username });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ message: 'Email already exists', status: false });
    if (usernameCheck)
      return res.json({ message: 'Username already exists', status: false });
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        firstname,
        lastname,
        username,
        email,
        password: hashedPassword
      });
      console.log(`---> User Registered - ${username}`);
      delete user.password;
      return res.json({ status: true, user });
    }catch(err) {
      next(err);
    }
};

module.exports.login = async (req, res, next) => {
  try{
    console.log(req.body);
    const { email: input , password } = req.body;
    const user = await User.findOne({
      $or: [
        { email: input},
        { username: input }
      ]
    });
    if (!user)
      return res.json({ message: "Incorrect Username or Email", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ message: "Incorrect Password", status: false });
    console.log(`---> User Login - ${user.username}`);
    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
};

module.exports.logout = async (req, res, next) => {
  try {
    const username = req.params.id;
    console.log(`---> User Logout - ${username}`);
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }
};


