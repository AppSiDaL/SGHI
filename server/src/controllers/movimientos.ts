import { type Request, type Response } from 'express'

const router = require('express').Router()

const { Movimiento } = require('../models')

router.get('/', async (_req: Request, res: Response) => {
  const movimientos = await Movimiento.findAll()
  res.json(movimientos)
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const movimiento = await Movimiento.create(req.body)
    res.json(movimiento)
  } catch (error) {
    return res.status(400).json({ error })
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  const movimiento = await Movimiento.findByPk(req.params.id)
  if (movimiento !== null && movimiento !== undefined) {
    res.json(movimiento)
  } else {
    res.status(404).end()
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  const movimiento = await Movimiento.findByPk(req.params.id)
  if (movimiento !== null && movimiento !== undefined) {
    await movimiento.destroy()
  }
  res.status(204).end()
})

router.put('/:id', async (req: Request, res: Response) => {
  const movimiento = await Movimiento.findByPk(req.params.id)
  if (movimiento !== null && movimiento !== undefined) {
    movimiento.important = req.body.important
    await movimiento.save()
    res.json(movimiento)
  } else {
    res.status(404).end()
  }
})

module.exports = router
