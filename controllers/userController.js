const User = require("../models/user");

module.exports = {
    signUp: async (req, res, next) => {
      const { firstName, email, password } = req.body;

      const foundUser = await User.findOne({ email });
      if (foundUser) {
        return res.status(403).json({ error: "Email is associated with another account."});
      }

      const newUser = new User({ firstName, email, password });
      await newUser.save();
    },
    signIn: function(req, res) {
      console.log("hello from \/signin");
    },
    secret: function(req, res) {
      console.log("hello from \/secret");
    }
};