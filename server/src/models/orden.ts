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
    orden:{
      type: DataTypes.INTEGER,
      allowNull: false,
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
    costo_cotizado: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    costo_material: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    costo_mano_obra: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    costo_total: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fecha_solicitud: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fecha_autorizacion: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    fecha_salida: {
      type: DataTypes.DATEONLY,
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
