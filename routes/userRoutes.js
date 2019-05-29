const express = require("express");
const router = require("express-promise-router")();
const passport = require("passport");
const passportConfig = require("../passport");

const { validateBody, schemas } = require("../routeHelp/routeHelp");
const userController = require("../controllers/userController");
const passportSignIn = passport.authenticate({ session: false });
const passportJWT = passport.authenticate("jwt", { session:false });


router.route("/signup")
  .post(validateBody(schemas.authSchema), userController.signUp);

router.route("/signin")
  .post(validateBody(schemas.authSchema), passportSignIn, userController.signIn);

router.route("/secret")
  .get(passportJWT, userController.secret);

module.exports = router;