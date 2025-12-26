const express = require("express");
const route = express.Router();
const home_controller = require("./../controller/home.controller");

route.get("/home", home_controller);

module.exports = route;
