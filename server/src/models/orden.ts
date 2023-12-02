const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../utils/db");

class Orden extends Model {}

Orden.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    r3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    departamento: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    estado: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    avance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cotizado: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    material: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mano_obra: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha_solicitud: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_autorizacion: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fecha_salida: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dias: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    prioridad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "ordenes",
  }
);
export {};

module.exports = Orden;
