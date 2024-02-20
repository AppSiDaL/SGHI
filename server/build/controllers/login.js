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
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/usuario');
loginRouter.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password } = request.body;
    const userFinded = yield User.findOne({ user });
    const passwordCorrect = userFinded === null ? false : yield bcrypt.compare(password, user.password);
    if (user === null || passwordCorrect === false) {
        return response.status(401).json({
            error: 'invalid username or password'
        });
    }
    const userForToken = {
        username: user.username,
        name: user.name,
        role: user.role
    };
    const token = jwt.sign(userForToken, process.env.SECRET, {
        expiresIn: 60 * 60 * 24
    });
    response
        .status(200)
        .send({ token, username: user.username, name: user.name, role: user.role });
}));
module.exports = loginRouter;
