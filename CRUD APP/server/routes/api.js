/**
 * Created by mishal23 on 10/7/17.
 */
var express = require('express'),
    router = express.Router();

// routes for user API
router.use("/user",require("../controllers/user.api"));

// add other API routes

module.exports = router;