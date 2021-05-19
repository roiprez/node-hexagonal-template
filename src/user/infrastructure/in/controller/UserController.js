"use strict";

const express = require("express");
const { getAll } = require("../../../application/UserGetter");
const { save } = require("../../../application/UserCreator");
const UserRepository = require("../../out/persistence/UserRepository");

const router = express.Router();
const userRepository = new UserRepository();

router.get("/user", async (req, res) => {
  res.send({ results: await getAll(userRepository) });
});

router.post("/user", async (req, res) => {
  const user = {
    name: req.body.name,
    surname: req.body.surname,
  }
  res.send(await save(userRepository, user));
});

module.exports = router;
