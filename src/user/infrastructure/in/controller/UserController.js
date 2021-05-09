"use strict";

const express = require("express");
const { getAll } = require("../../../application/get/UserGetter")

const router = express.Router();

router.get("/user", getAll);

module.exports = router;
