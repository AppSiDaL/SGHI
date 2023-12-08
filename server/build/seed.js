"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pieza, Herramienta, Orden, Movimiento } = require("./models"); // Asegúrate de que la ruta sea correcta
const piezas = [
    {
        orden: 1,
        codigo: "DC-202",
        numero_pieza: "36",
        descripcion: "Cavidad",
        cantidad: 2,
        estado: "procesando",
        area: "fresas convencionales",
        fecha_entrada: new Date(),
        fecha_salida: new Date(),
        dias: 1,
        observaciones: "En proceso",
    },
    {
        orden: 2,
        codigo: "TR-1416",
        numero_pieza: "3A",
        descripcion: "Punzon 1/2",
        cantidad: 2,
        estado: "detenido",
        area: "tornos convencionales",
        fecha_entrada: new Date(),
        fecha_salida: new Date(),
        dias: 1,
        observaciones: "",
    },
    {
        orden: 3,
        codigo: "TF-170",
        numero_pieza: "19",
        descripcion: "Inserto",
        cantidad: 2,
        estado: "ajustando",
        area: "ajuste de moldes",
        fecha_entrada: new Date(),
        fecha_salida: new Date(),
        dias: 3,
        observaciones: "",
    },
];
const herramientas = [
    {
        codigo: "TR-1416",
        numero_pieza: "19",
        descripcion: "Punzon 1/2",
        fecha_modificacion: new Date(),
        dibujo: "https://media.publit.io/file/template.pdf",
    },
    {
        codigo: "DC_202",
        numero_pieza: "36",
        descripcion: "Cavidad",
        fecha_modificacion: new Date(),
        dibujo: "https://media.publit.io/file/template.pdf",
    },
    {
        codigo: "TF_170",
        numero_pieza: "19",
        descripcion: "Inserto",
        fecha_modificacion: new Date(),
        dibujo: "https://media.publit.io/file/template.pdf",
    },
];
const ordenes = [
    {
        orden: 1,
        r3: 66001199,
        departamento: "precision",
        codigo: "DC-202",
        estado: "procesando",
        avance: 89,
        costo_cotizado: 225000,
        costo_material: 75000,
        costo_mano_obra: 150000,
        costo_total: 199000,
        fecha_solicitud: new Date(),
        fecha_autorizacion: new Date(),
        fecha_salida: new Date(),
        dias: 1,
        prioridad: 1,
    },
    {
        orden: 2,
        r3: 66001199,
        departamento: "troquelado de caja",
        codigo: "TR-1416",
        estado: "entregado",
        avance: 20,
        costo_cotizado: 200000,
        costo_material: 20000,
        costo_mano_obra: 180000,
        costo_total: 100000,
        fecha_solicitud: new Date(),
        fecha_autorizacion: new Date(),
        fecha_salida: new Date(),
        dias: 2,
        prioridad: 2,
    },
    {
        orden: 3,
        r3: 66003432,
        departamento: "troquelado de caja",
        codigo: "TF-170",
        estado: "procesando",
        avance: 33,
        costo_cotizado: 180000,
        costo_material: 30000,
        costo_mano_obra: 150000,
        costo_total: 35000,
        fecha_solicitud: new Date(),
        fecha_autorizacion: new Date(),
        fecha_salida: new Date(),
        dias: 1,
        prioridad: 3,
    },
];
const movimientos = [
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
    .catch((error) => console.log("Error al insertar ordenes:", error));
Pieza.bulkCreate(piezas)
    .then(() => console.log("Piezas insertadas correctamente"))
    .catch((error) => console.log("Error al insertar piezas:", error));
Herramienta.bulkCreate(herramientas)
    .then(() => console.log("Herramientas insertadas correctamente"))
    .catch((error) => console.log("Error al insertar herramientas:", error));
Movimiento.bulkCreate(movimientos)
    .then(() => console.log("Movimientos insertados correctamente"))
    .catch((error) => console.log("Error al insertar movimientos:", error));
