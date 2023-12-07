"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require("express");
require("express-async-errors");
const middleware = require("./middleware");
const app = express();
const cors = require("cors");
const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");
const piezasRouter = require("./controllers/piezas");
const herramientasRouter = require("./controllers/herramientas");
const ordenesRouter = require("./controllers/ordenes");
const movimientosRouter = require("./controllers/movimientos");
const loginRouter = require("./controllers/login");
const usuariosRouter = require("./controllers/users");
app.use(cors());
app.use(express.static("./dist"));
app.use(express.json());
app.use(middleware.addToken);
app.use(middleware.requestLogger);
app.use("/api/piezas", piezasRouter);
app.use("/api/herramientas", herramientasRouter);
app.use("/api/ordenes", ordenesRouter);
app.use("/api/movimientos", movimientosRouter);
app.use("/api/login", loginRouter);
app.use("/api/usuarios", usuariosRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
start();
