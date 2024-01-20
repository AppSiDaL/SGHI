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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const publitio_js_sdk_1 = __importDefault(require("publitio_js_sdk"));
const fs_1 = require("fs");
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const middleware = require('../middleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const publitio = new publitio_js_sdk_1.default('669h9nrnmMLBlDRmR66v', 'inh3NVD6Wx3vjLTPVJAytHX6S4wj2RDa');
const { Herramienta } = require('../models');
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const herramientas = yield Herramienta.findAll();
    res.json(herramientas);
}));
router.post('/', middleware.userExtractor, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (decodedToken.username === undefined) {
        return res.status(401).json({ error: 'token invalid' });
    }
    const newHerramienta = Object.assign(Object.assign({}, req.body), { fecha_modificacion: new Date() });
    const herramienta = yield Herramienta.create(newHerramienta);
    return res.status(201).json(herramienta);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const herramienta = yield Herramienta.findByPk(req.params.id);
    if (herramienta !== null && herramienta !== undefined) {
        res.json(herramienta);
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
    const herramienta = yield Herramienta.findByPk(req.params.id);
    if (herramienta !== null && herramienta !== undefined) {
        yield herramienta.destroy();
        return res.status(200).json({ message: 'Herramienta eliminada' });
    }
    return res.status(400).json({ error: 'Herramienta no encontrada' });
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const herramienta = yield Herramienta.findByPk(req.params.id);
    if (herramienta !== null && herramienta !== undefined) {
        herramienta.important = req.body.important;
        yield herramienta.save();
        res.json(herramienta);
    }
    else {
        res.status(404).end();
    }
}));
router.post('/upload', upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    if (file === null || file === undefined) {
        return res.status(400).json({ error: 'No file provided' });
    }
    const fileBuffer = (0, fs_1.readFileSync)(file.path);
    publitio
        .uploadFile(fileBuffer, 'file')
        .then((data) => {
        res.json({
            message: 'Archivo subido con éxito',
            response: data
        });
    })
        .catch((error) => {
        res.status(500).json({ error: error.message });
    });
}));
module.exports = router;
module.exports = router;
