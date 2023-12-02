import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/usuario");

loginRouter.post("/", async (request: Request, response: Response) => {
  const { username, password } = request.body;

  const user = await User.findOne({ username });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    username: user.username,
    name: user.name,
    role: user.role,
  };

  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60 * 24,
  });

  response
    .status(200)
    .send({ token, username: user.username, name: user.name, role: user.role });
});

module.exports = loginRouter;
