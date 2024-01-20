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
const jwt = require('jsonwebtoken');
const middleware = require('../middleware');
const router = require('express').Router();
const { Orden } = require('../models');
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ordenes = yield Orden.findAll();
    res.json(ordenes);
}));
router.post('/', middleware.userExtractor, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (decodedToken.username === undefined) {
        return res.status(401).json({ error: 'token invalid' });
    }
    const fecha = new Date();
    const fechaSalida = new Date(req.body.fecha_salida);
    const dias = Math.floor((fechaSalida.getTime() - fecha.getTime()) / (1000 * 60 * 60 * 24));
    const newOrden = Object.assign(Object.assign({}, req.body), { mano_obra: req.body.manoObra, dias });
    const orden = yield Orden.create(newOrden);
    return res.status(201).json(orden);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orden = yield Orden.findByPk(req.params.id);
    if (orden !== null && orden !== undefined) {
        res.json(orden);
    }
    else {
        res.status(404).end();
    }
}));
router.delete('/:id', middleware.userExtractor, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (decodedToken.username === undefined) {
        return res.status(401).json({ error: 'token invalid' });
    }
    const orden = yield Orden.findByPk(req.params.id);
    if (orden !== null && orden !== undefined) {
        yield orden.destroy();
        return res.status(200).json({ message: 'Orden eliminada' });
    }
    return res.status(400).json({ error: 'Orden no encontrada' });
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orden = yield Orden.findByPk(req.params.id);
    if (orden !== null && orden !== undefined) {
        orden.important = req.body.important;
        yield orden.save();
        res.json(orden);
    }
    else {
        res.status(404).end();
    }
}));
module.exports = router;
