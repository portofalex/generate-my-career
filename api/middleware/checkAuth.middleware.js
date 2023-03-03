const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: 'User not logged in.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.token = decoded;
    next();
  } catch(error) {
    console.error(error);
    res.status(401).json({ message: 'User not logged in.' });
  }
}