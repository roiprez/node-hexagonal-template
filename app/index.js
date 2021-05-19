"use strict";

const config = require("config-yml");
const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.connect(
    `mongodb://${config.db.mongodb.host}:${config.db.mongodb.port}/${config.db.mongodb.database}`, 
    {useNewUrlParser: true, useUnifiedTopology: true}
    ).catch(error => { console.log(error) });;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

// parse application/json
app.use(express.json({ limit: "50mb" }));

require("../routes")(app);

module.exports = app;
