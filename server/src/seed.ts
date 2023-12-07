import {
  Pieza as PiezaType,
  Herramienta as HerramientaType,
  Orden as OrdenType,
  Movimiento as MovimientoType,
} from "./types";

const { Pieza, Herramienta, Orden, Movimiento } = require("./models"); // Asegúrate de que la ruta sea correcta

const piezas: PiezaType[] = [
  {
    orden: 1,
    codigo: "1",
    numero_pieza: "1",
    descripcion: "1",
    cantidad: 1,
    estado: "1",
    area: "1",
    fecha_entrada: new Date(),
    fecha_salida: new Date(),
    dias: 1,
    observaciones: "1",
  },
  {
    orden: 2,
    codigo: "2",
    numero_pieza: "2",
    descripcion: "2",
    cantidad: 2,
    estado: "2",
    area: "2",
    fecha_entrada: new Date(),
    fecha_salida: new Date(),
    dias: 2,
    observaciones: "2",
  },
  {
    orden: 3,
    codigo: "3",
    numero_pieza: "3",
    descripcion: "3",
    cantidad: 3,
    estado: "3",
    area: "3",
    fecha_entrada: new Date(),
    fecha_salida: new Date(),
    dias: 3,
    observaciones: "3",
  },
];

const herramientas: HerramientaType[] = [
  {
    codigo: "1",
    numero_pieza: "1",
    descripcion: "1",
    fecha_modificacion: new Date(),
    dibujo: "https://media.publit.io/file/template.pdf",
  },
  {
    codigo: "2",
    numero_pieza: "2",
    descripcion: "2",
    fecha_modificacion: new Date(),
    dibujo: "https://media.publit.io/file/template.pdf",
  },
  {
    codigo: "3",
    numero_pieza: "3",
    descripcion: "3",
    fecha_modificacion: new Date(),
    dibujo: "https://media.publit.io/file/template.pdf",
  },
];

const ordenes: OrdenType[] = [
  {
    orden: 1,
    r3: 1,
    departamento: "1",
    codigo: "1",
    estado: "1",
    avance: 1,
    costo_cotizado: 1,
    costo_material: 1,
    costo_mano_obra: 1,
    costo_total: 1,
    fecha_solicitud: new Date(),
    fecha_autorizacion: new Date(),
    fecha_salida: new Date(),
    dias: 1,
    prioridad: 1,
  },
  {
    orden: 2,
    r3: 2,
    departamento: "2",
    codigo: "2",
    estado: "2",
    avance: 2,
    costo_cotizado: 2,
    costo_material: 2,
    costo_mano_obra: 2,
    costo_total: 2,
    fecha_solicitud: new Date(),
    fecha_autorizacion: new Date(),
    fecha_salida: new Date(),
    dias: 2,
    prioridad: 2,
  },
  {
    orden: 3,
    r3: 3,
    departamento: "3",
    codigo: "3",
    estado: "3",
    avance: 3,
    costo_cotizado: 3,
    costo_material: 3,
    costo_mano_obra: 3,
    costo_total: 3,
    fecha_solicitud: new Date(),
    fecha_autorizacion: new Date(),
    fecha_salida: new Date(),
    dias: 3,
    prioridad: 3,
  },
];

const movimientos: MovimientoType[] = [
  {
    m_1: "Fresas Convencionales|2023-11-11",
    m_2: "Temple|2023-11-11",
    m_3: "Rectificado|2023-11-11",
  },
  {
    m_1: "Tornos Convencionales|2023-11-11",
    m_2: "Temple|2023-11-11",
    m_3: "Rectificado|2023-11-11",
  },
  {
    m_1: "Tornos CNC|2023-11-11",
    m_2: "Temple|2023-11-11",
    m_3: "Rectificado|2023-11-11",
  },
];

Orden.bulkCreate(ordenes)
  .then(() => console.log("Ordenes insertadas correctamente"))
  .catch((error: any) => console.log("Error al insertar ordenes:", error));

Pieza.bulkCreate(piezas)
  .then(() => console.log("Piezas insertadas correctamente"))
  .catch((error: any) => console.log("Error al insertar piezas:", error));

Herramienta.bulkCreate(herramientas)
  .then(() => console.log("Herramientas insertadas correctamente"))
  .catch((error: any) => console.log("Error al insertar herramientas:", error));

Movimiento.bulkCreate(movimientos)
  .then(() => console.log("Movimientos insertados correctamente"))
  .catch((error: any) => console.log("Error al insertar movimientos:", error));
