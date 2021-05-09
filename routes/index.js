"use strict";

const userRoutes = require("../src/user/infrastructure/in/controller/UserController");

const routers = (app) => {
  app.use("/api/v1", userRoutes);
};

module.exports = routers;
