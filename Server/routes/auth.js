const express = require("express");
const router = express.Router();
const { signup } = require("../handlers/auth");

router.post("/signup", signup)  // if there is any post req to /signup then we run the signup function

module.exports = router;