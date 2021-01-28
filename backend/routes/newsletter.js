var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { getNewsletterEmail } = require("../controllers/newsletter");

router.post(
  "/",
  [
    check("email", "email is required").isEmail()
  ],
  getNewsletterEmail
);

module.exports = router;