import { Request, Response } from "express";
import { CustonRequest } from "../types";
const { Herramienta, Orden } = require("../models");
const middleware = require("../middleware");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

const { Pieza } = require("../models");

router.get("/", async (_req: Request, res: Response) => {
  const piezas = await Pieza.findAll();
  res.json(piezas);
});

router.post(
  "/",
  middleware.userExtractor,
  async (req: CustonRequest, res: Response) => {
    const decodedToken = jwt.verify(req.token, process.env.SECRET);
    if (!decodedToken.username) {
      return res.status(401).json({ error: "token invalid" });
    }

    const fecha_entrada = new Date(req.body.fecha_entrada);
    const fecha_salida = new Date(req.body.fecha_salida);
    const dias =
      Math.abs(fecha_salida.getTime() - fecha_entrada.getTime()) /
      (1000 * 60 * 60 * 24);

    const newPieza = {
      ...req.body,
      dias: dias,
    };
    const pieza = await Pieza.create(newPieza);
    return res.status(201).json(pieza);
  }
);

router.get("/:id", async (req: Request, res: Response) => {
  const pieza = await Pieza.findByPk(req.params.id);
  if (pieza) {
    const piezaDetalles = await Pieza.findOne({
      where: {
        id: pieza.id
      },
      include: [
        {
          model: Herramienta,
          where: {
            codigo: pieza.codigo,
            numero_pieza: pieza.numero_pieza
          }
        },
      ],
    });
    if (piezaDetalles) {
      res.status(200).json(piezaDetalles);
    } else {
      res.status(404).end();
    }
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
    const pieza = await Pieza.findByPk(req.params.id);
    if (pieza) {
      await pieza.destroy();
      return res.status(200).json({ message: "Pieza eliminada" });
    }
    return res.status(400).json({ error: "Pieza no encontrada" });
  }
);

router.put("/:id", async (req: Request, res: Response) => {
  const pieza = await Pieza.findByPk(req.params.id);
  if (pieza) {
    pieza.area = req.body.area;
    await pieza.save();
    res.json(pieza);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
