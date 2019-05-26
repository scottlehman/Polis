const router = require("express").Router();
const userController = require("../../controllers/userController");

    //Sign up
    router.route("/")
        .post(userController.signUp);

    module.exports = router;
