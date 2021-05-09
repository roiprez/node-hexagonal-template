"use strict";

const express = require("express");
const { getAll } = require("../../../application/get/UserGetter");
const userRepository = require("../../out/persistence/UserRepository");

const router = express.Router();

router.get("/user", async (req, res) => {
  res.send({ results: await getAll(userRepository) });
});

module.exports = router;
