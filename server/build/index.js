"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
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
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
start();
