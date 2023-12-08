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
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
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
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fecha_salida: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dias: {
      type: DataTypes.INTEGER,
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
    modelName: "piezas",
  }
);
export {};

module.exports = Pieza;
