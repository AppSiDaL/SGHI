"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");
class Usuario extends Model {
}
Usuario.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    username: {
        primaryKey: true,
        type: DataTypes.TEXT,
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    role: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "usuarios",
});
module.exports = Usuario;
