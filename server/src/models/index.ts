const Pieza = require("./pieza");
const Herramienta = require("./herramienta");
const Orden = require("./orden");
const Movimiento = require("./movimiento");
const Usuario = require("./usuario");

Usuario.sync();
Movimiento.sync();
Orden.sync();
Herramienta.sync();
Pieza.sync();
export {};

module.exports = {
  Usuario,
  Movimiento,
  Pieza,
  Orden,
  Herramienta,
};
