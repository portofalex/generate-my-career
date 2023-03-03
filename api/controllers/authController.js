const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const SALT = bcrypt.genSaltSync(10);

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, SALT),
      credits: 500,
      profile: {
        workExperiences: [],
        highlights: [],
      },
    });

    return res
      .status(201)
      .json({ message: `User ${email} registered successfully.` });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: 'Something bad happened...' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User does not exist.' });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Incorrect password.' });
    }

    const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    return res.status(200).cookie('token', token, { maxAge: 6000000 }).json({
      id: user._id,
      email: user.email,
      credits: user.credits,
      name: user.profile.name,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Something bad happened...' });
  }
};

exports.logoutUser = async (req, res) => {
  res
    .status(205)
    .cookie('token', '')
    .json({ message: 'Successfully logged out user.' });
};
