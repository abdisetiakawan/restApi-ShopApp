const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/User");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findByPk(decoded.userId);

    if (!user) return res.sendStatus(403);

    req.user = { id: user.id, role: user.role };

    next();
  } catch (error) {
    res.sendStatus(403);
  }
};

const authorizeRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
};

module.exports = { authenticateToken, authorizeRole };
