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
const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/usuario");
usersRouter.get("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.findAll();
    response.json(users);
}));
usersRouter.post("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, name, password, role } = request.body;
    if (password) {
        if (password.length < 3) {
            return response.status(400).json({ error: "password too short" });
        }
        const saltRounds = 10;
        const passwordHash = yield bcrypt.hash(password, saltRounds);
        const user = new User({
            username,
            role,
            name,
            password: passwordHash,
        });
        const savedUser = yield user.save();
        response.status(201).json(savedUser);
    }
    else {
        return response.status(400).json({
            error: "User validation failed: username: Path `password` is required.",
        });
    }
}));
module.exports = usersRouter;
