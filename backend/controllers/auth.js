const bcryptjs = require("bcryptjs");

const User = require("../models/User");

exports.register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.json('Required fields are "name", "email", and "password"');
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(201).json("New user created");
  } catch (err) {
    console.log(err);
    return res.json("Server error");
  }
};

exports.login = () => {};
