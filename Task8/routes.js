const express = require("express");
const routes = express.Router();
const sql = require("./database");
const controller = require("./controller");
routes.post("/signup", controller.signup);
routes.post("/login", controller.login);
routes.put("/forgot",controller.forgot);
routes.get("/view", controller.view);
routes.put("/edit",controller.edit);
module.exports = routes;
