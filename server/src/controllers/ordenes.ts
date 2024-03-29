import { type Request, type Response } from 'express'
import { type CustonRequest } from '../types'
const jwt = require('jsonwebtoken')
const middleware = require('../middleware')
const router = require('express').Router()

const { Orden } = require('../models')

router.get('/', async (_req: Request, res: Response) => {
  const ordenes = await Orden.findAll()
  res.json(ordenes)
})

router.post(
  '/',
  middleware.userExtractor,
  async (req: CustonRequest, res: Response) => {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)
    if (decodedToken.username === undefined) {
      return res.status(401).json({ error: 'token invalid' })
    }

    const fecha = new Date()
    const fechaSalida = new Date(req.body.fecha_salida as Date)
    const dias = Math.floor(
      (fechaSalida.getTime() - fecha.getTime()) / (1000 * 60 * 60 * 24)
    )

    const newOrden = {
      ...req.body,
      mano_obra: req.body.manoObra,
      dias
    }
    const orden = await Orden.create(newOrden)
    return res.status(201).json(orden)
  }
)

router.get('/:id', async (req: Request, res: Response) => {
  const orden = await Orden.findByPk(req.params.id)
  if (orden !== null && orden !== undefined) {
    res.json(orden)
  } else {
    res.status(404).end()
  }
})

router.delete(
  '/:id',
  middleware.userExtractor,
  async (req: CustonRequest, res: Response) => {
    const decodedToken = jwt.verify(req.token, process.env.SECRET)
    if (decodedToken.username === undefined) {
      return res.status(401).json({ error: 'token invalid' })
    }
    const orden = await Orden.findByPk(req.params.id)
    if (orden !== null && orden !== undefined) {
      await orden.destroy()
      return res.status(200).json({ message: 'Orden eliminada' })
    }
    return res.status(400).json({ error: 'Orden no encontrada' })
  }
)

router.put('/:id', async (req: Request, res: Response) => {
  const orden = await Orden.findByPk(req.params.id)
  if (orden !== null && orden !== undefined) {
    orden.important = req.body.important
    await orden.save()
    res.json(orden)
  } else {
    res.status(404).end()
  }
})

module.exports = router
