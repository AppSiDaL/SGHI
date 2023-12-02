import { Request, Response } from "express";
import { CustonRequest } from "../types";

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const middleware = require("../middleware");
import FormData from "form-data";
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const upload = multer({ dest: "uploads/" });

const { Herramienta } = require("../models");

router.get("/", async (_req: Request, res: Response) => {
  const herramientas = await Herramienta.findAll();
  res.json(herramientas);
});

router.post(
  "/",
  middleware.userExtractor,
  async (req: CustonRequest, res: Response) => {
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (!decodedToken.username) {
      return res.status(401).json({ error: "token invalid" });
    }

    const newHerramienta = {
      ...req.body,
      fecha_modificacion: new Date(),
    };
    const herramienta = await Herramienta.create(newHerramienta);
    return res.status(201).json(herramienta);
  }
);

router.get("/:id", async (req: Request, res: Response) => {
  const herramienta = await Herramienta.findByPk(req.params.id);
  if (herramienta) {
    res.json(herramienta);
  } else {
    res.status(404).end();
  }
});

router.delete(
  "/:id",
  middleware.userExtractor,
  async (req: CustonRequest, res: Response) => {
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (!decodedToken.username) {
      return res.status(401).json({ error: "token invalid" });
    }
    const herramienta = await Herramienta.findByPk(req.params.id);
    if (herramienta) {
      await herramienta.destroy();
      return res.status(200).json({ message: "Herramienta eliminada" });
    }
    return res.status(400).json({ error: "Herramienta no encontrada" });
  }
);

router.put("/:id", async (req: Request, res: Response) => {
  const herramienta = await Herramienta.findByPk(req.params.id);
  if (herramienta) {
    herramienta.important = req.body.important;
    await herramienta.save();
    res.json(herramienta);
  } else {
    res.status(404).end();
  }
});

interface FileRequest extends Request {
  file?: Express.Multer.File;
}

router.post(
  "/upload",
  upload.single("file"),
  async (req: FileRequest, res: Response) => {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "No file provided" });
    }
    const fileStream = fs.createReadStream(file.path);

    const formData = new FormData();
    formData.append("public_id", file.filename);
    formData.append("title", file.originalname);
    formData.append("file", fileStream);

    const response = await axios.post(process.env.PUBLITIO_URL, formData, {
      headers: {
        Accept: "application/json",
        ...formData.getHeaders(),
      },
    });

    fs.unlinkSync(file.path); // Elimina el archivo después de enviarlo

    res.json({
      message: "Archivo subido con éxito",
      response: response.data,
    });
  }
);

module.exports = router;

module.exports = router;
