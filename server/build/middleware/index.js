"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const requestLogger = (request, response, next) => {
    console.info("---");
    console.info("\x1b[36m%s\x1b[0m", "Method:", request.method); // Cyan
    console.info("\x1b[32m%s\x1b[0m", "Path:  ", request.path); // Green
    console.info("\x1b[33m%s\x1b[0m", "Body:  ", request.body); // Yellow
    console.info("---");
    next();
};
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
};
const addToken = (request, response, next) => {
    var _a;
    const authorization = (_a = request.get("Authorization")) === null || _a === void 0 ? void 0 : _a.trimStart();
    if (authorization && authorization.startsWith("Bearer")) {
        const token = authorization.replace("Bearer", "").trimStart();
        console.log(token);
        request.token = token;
        next();
        return request;
    }
    next();
    return null;
};
const userExtractor = (request, response, next) => {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    request.user = decodedToken.username;
    next();
    return request;
};
const errorHandler = (error, request, response, next) => {
    console.info(error);
    if (error.name === "CastError") {
        return response.status(400).send({ error: "malformatted id" });
    }
    else if (error.name === "ValidationError") {
        return response.status(400).json({ error: error.message });
    }
    else if (error.name === "JsonWebTokenError") {
        return response.status(401).json({ error: error.message });
    }
    else if (error.name === "TokenExpiredError") {
        return response.status(401).json({
            error: "token expired",
        });
    }
    next(error);
};
module.exports = {
    userExtractor,
    requestLogger,
    addToken,
    unknownEndpoint,
    errorHandler,
};
