const express = require("express");
const router = express.Router();
const aboutFunction =  require('./../controller/about.controller')


router.get("/about",aboutFunction);
module.exports = router;
