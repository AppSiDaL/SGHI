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
const router = require("express").Router();
const { Movimiento } = require("../models");
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movimientos = yield Movimiento.findAll();
    res.json(movimientos);
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movimiento = yield Movimiento.create(req.body);
        res.json(movimiento);
    }
    catch (error) {
        return res.status(400).json({ error });
    }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movimiento = yield Movimiento.findByPk(req.params.id);
    if (movimiento) {
        res.json(movimiento);
    }
    else {
        res.status(404).end();
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movimiento = yield Movimiento.findByPk(req.params.id);
    if (movimiento) {
        yield movimiento.destroy();
    }
    res.status(204).end();
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movimiento = yield Movimiento.findByPk(req.params.id);
    if (movimiento) {
        movimiento.important = req.body.important;
        yield movimiento.save();
        res.json(movimiento);
    }
    else {
        res.status(404).end();
    }
}));
module.exports = router;
