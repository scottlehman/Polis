const JWT = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = require("../configuration");

signToken = user => {
  return JWT.sign({
    iss: 'Polis',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {
      const { firstName, email, password } = req.body;

      const foundUser = await User.findOne({ email });
      if (foundUser) {
        return res.status(403).json({ error: "Email is associated with another account."});
      }

      const newUser = new User({ firstName, email, password });
      await newUser.save();

      const token = signToken(newUser);

      res.status(200).json({ token });

    },
    signIn: async (req, res, next) => {
      
      const token = signToken(req.user);
      res.status(200).json({ token });

    },
    secret: async (req, res, next) => {
      res.json({ secret: "resource" });
    }
};