const User = require("../models/User");

exports.login = async (req, res) => {
  const { name, email } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({ name, email });
  }

  res.json(user);
};
