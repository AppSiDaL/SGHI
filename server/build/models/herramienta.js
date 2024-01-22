"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');
class Herramienta extends Model {
}
Herramienta.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    numero_pieza: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_modificacion: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    dibujo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'herramientas'
});
module.exports = Herramienta;
