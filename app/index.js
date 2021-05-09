"use strict";

const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/keybhub', 
    {useNewUrlParser: true, useUnifiedTopology: true}
    ).catch(error => { console.log(error) });;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

// parse application/json
app.use(express.json({ limit: "50mb" }));

require("../routes")(app);

module.exports = app;
