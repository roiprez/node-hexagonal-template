"use strict";

const apiServices = require("../src/user/infrastructure/in/controller/UserController");

const routers = (app) => {
  app.use("/api/v1", apiServices);
};

module.exports = routers;
