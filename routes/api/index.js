const router = require("express").Router();
const userRoutes = require("./userAccount");

router.use("/users", userRoutes);

module.exports = router;