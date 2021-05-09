"use strict";

const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

// parse application/json
app.use(express.json({ limit: "50mb" }));

require("../routes")(app);

module.exports = app;
