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
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const middleware = require("../middleware");
const form_data_1 = __importDefault(require("form-data"));
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const upload = multer({ dest: "uploads/" });
const { Herramienta } = require("../models");
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const herramientas = yield Herramienta.findAll();
    res.json(herramientas);
}));
router.post("/", middleware.userExtractor, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (!decodedToken.username) {
        return res.status(401).json({ error: "token invalid" });
    }
    const newHerramienta = Object.assign(Object.assign({}, req.body), { fecha_modificacion: new Date() });
    const herramienta = yield Herramienta.create(newHerramienta);
    return res.status(201).json(herramienta);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const herramienta = yield Herramienta.findByPk(req.params.id);
    if (herramienta) {
        res.json(herramienta);
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
    const herramienta = yield Herramienta.findByPk(req.params.id);
    if (herramienta) {
        yield herramienta.destroy();
        return res.status(200).json({ message: "Herramienta eliminada" });
    }
    return res.status(400).json({ error: "Herramienta no encontrada" });
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const herramienta = yield Herramienta.findByPk(req.params.id);
    if (herramienta) {
        herramienta.important = req.body.important;
        yield herramienta.save();
        res.json(herramienta);
    }
    else {
        res.status(404).end();
    }
}));
router.post("/upload", upload.single("file"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: "No file provided" });
    }
    const fileStream = fs.createReadStream(file.path);
    const formData = new form_data_1.default();
    formData.append("public_id", file.filename);
    formData.append("title", file.originalname);
    formData.append("file", fileStream);
    const response = yield axios.post(process.env.PUBLITIO_URL, formData, {
        headers: Object.assign({ Accept: "application/json" }, formData.getHeaders()),
    });
    fs.unlinkSync(file.path); // Elimina el archivo después de enviarlo
    res.json({
        message: "Archivo subido con éxito",
        response: response.data,
    });
}));
module.exports = router;
module.exports = router;
