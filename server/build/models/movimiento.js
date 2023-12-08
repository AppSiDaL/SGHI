"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");
class Movimiento extends Model {
}
Movimiento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    m_1: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_2: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_3: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_4: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_5: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_6: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_7: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_8: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_9: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_10: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_11: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_12: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_13: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_14: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    m_15: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "movimientos",
});
module.exports = Movimiento;
