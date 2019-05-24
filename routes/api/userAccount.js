const router = require("express").Router();
const userController = require("../../controllers/userController");

    //Sign up
    router.route("/")
        .post(userController.create)
        .get(userController.findAll);

    module.exports = router;
