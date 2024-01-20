"use strict";
var _a;
require('dotenv').config();
module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001
};
