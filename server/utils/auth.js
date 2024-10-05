const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = process.env.JWT_SECRET || "myfallbacksecret"; // Uses .env JWT_SECRET or a fallback
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.headers.authorization || "";
    if (token) {
      token = token.split(" ").pop().trim();
    }
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
