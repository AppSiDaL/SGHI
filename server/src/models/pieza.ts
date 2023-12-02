const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Pieza extends Model {}

Pieza.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orden: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    numero_pieza: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    area: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fecha_entrada: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_salida: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dias: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "pieza",
  }
);
export {};

module.exports = Pieza;
