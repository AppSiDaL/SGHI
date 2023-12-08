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
Object.defineProperty(exports, "__esModule", { value: true });
const { Herramienta, Orden } = require("../models");
const middleware = require("../middleware");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { Pieza } = require("../models");
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const piezas = yield Pieza.findAll();
    res.json(piezas);
}));
router.post("/", middleware.userExtractor, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (!decodedToken.username) {
        return res.status(401).json({ error: "token invalid" });
    }
    const fecha_entrada = new Date(req.body.fecha_entrada);
    const fecha_salida = new Date(req.body.fecha_salida);
    const dias = Math.abs(fecha_salida.getTime() - fecha_entrada.getTime()) /
        (1000 * 60 * 60 * 24);
    const newPieza = Object.assign(Object.assign({}, req.body), { dias: dias });
    const pieza = yield Pieza.create(newPieza);
    return res.status(201).json(pieza);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pieza = yield Pieza.findByPk(req.params.id, {
        include: [
            {
                model: Herramienta,
            },
        ],
    });
    if (pieza) {
        res.status(200).json(pieza);
    }
    else {
        res.status(404).end();
    }
}));
router.delete("/:id", middleware.userExtractor, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (!decodedToken.username) {
        return res.status(401).json({ error: "token invalid" });
    }
    const pieza = yield Pieza.findByPk(req.params.id);
    if (pieza) {
        yield pieza.destroy();
        return res.status(200).json({ message: "Pieza eliminada" });
    }
    return res.status(400).json({ error: "Pieza no encontrada" });
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pieza = yield Pieza.findByPk(req.params.id);
    if (pieza) {
        pieza.important = req.body.important;
        yield pieza.save();
        res.json(pieza);
    }
    else {
        res.status(404).end();
    }
}));
module.exports = router;
