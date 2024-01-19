import { type Request, type Response } from 'express'

const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/usuario')

usersRouter.get('/', async (request: Request, response: Response) => {
  const users = await User.findAll()

  response.json(users)
})

usersRouter.post('/', async (request: Request, response: Response) => {
  const { username, name, password, role } = request.body
  if (password !== null && password !== undefined) {
    if (password.length < 3) {
      return response.status(400).json({ error: 'password too short' })
    }
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = new User({
      username,
      role,
      name,
      password: passwordHash
    })
    const savedUser = await user.save()

    response.status(201).json(savedUser)
  } else {
    return response.status(400).json({
      error: 'User validation failed: username: Path `password` is required.'
    })
  }
})

module.exports = usersRouter
