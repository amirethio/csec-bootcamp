const express = require("express");
const router = express.Router();
const contact_function = require("./../controller/contact.controller");

router.get("/contact", contact_function);

module.exports = router;
