"use strict";
const config = require("config-yml");
const app = require("./app");

app.listen(config.port);
console.log("Servidor escuchando en puerto " + config.port);

app.on("error", (err) => {
  console.error(err);
});
