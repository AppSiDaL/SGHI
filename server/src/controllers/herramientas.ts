import { Request, Response } from "express";
import { CustonRequest } from "../types";

const router = require("express").Router();
const jwt = require("jsonwebtoken");
const middleware = require("../middleware");
import FormData from "form-data";
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
import PublitioAPI from 'publitio_js_sdk'
import { readFileSync } from 'fs'

const upload = multer({ dest: 'uploads/' })

const publitio = new PublitioAPI('669h9nrnmMLBlDRmR66v', 'inh3NVD6Wx3vjLTPVJAytHX6S4wj2RDa')

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

router.post("/upload", upload.single("file"), async (req: any, res: Response) => {
  const file = req.file;
  if (!file) {
      return res.status(400).json({ error: "No file provided" });
  }

  const fileBuffer = readFileSync(file.path)

  publitio.uploadFile(fileBuffer, 'file')
      .then((data:any) => { 
          res.json({
              message: "Archivo subido con éxito",
              response: data,
          });
      })
      .catch((error:Error) => { 
          res.status(500).json({ error: error.message });
      })
});

module.exports = router;

module.exports = router;
