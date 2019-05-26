const db = require("../models");

module.exports = {
    signUp: function(req, res) {
      console.log("hello mother", req.body);
      db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    signIn: function(req, res) {
      db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    secret: function(req, res) {
      db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    }
};