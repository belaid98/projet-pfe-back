const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.query.token || req.headers["authorization"];

  if (!token) {
    return res
      .status(403)
      .send({ error: "A token is required for authentication" });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
  } catch (err) {
    return res.status(401).send({ error: "Invalid Token" });
  }
  return next();
};

module.exports = verifyToken;
