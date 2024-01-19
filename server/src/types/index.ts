import { type ErrorRequestHandler, type Request } from 'express'

export interface CustonRequest extends Request {
  token?: string
  user?: string
}
export interface CustomError extends ErrorRequestHandler {
  message?: string
}

export interface Pieza {
  id?: number
  orden: number
  codigo: string
  numero_pieza: string
  descripcion: string
  cantidad: number
  estado: string
  area: string
  fecha_entrada: Date
  fecha_salida: Date
  dias: number
  observaciones: string
}

export interface Orden {
  id?: number
  orden: number
  r3: number
  departamento: string
  codigo: string
  estado: string
  avance: number
  costo_cotizado: number
  costo_material: number
  costo_mano_obra: number
  costo_total: number
  fecha_solicitud: Date
  fecha_autorizacion: Date
  fecha_salida: Date
  dias: number
  prioridad: number
}

export interface Herramienta {
  id?: number
  codigo: string
  numero_pieza: string
  descripcion: string
  fecha_modificacion: Date
  dibujo: string
}
export interface Movimiento {
  id?: number
  m_1?: string
  m_2?: string
  m_3?: string
  m_4?: string
  m_5?: string
  m_6?: string
  m_7?: string
  m_8?: string
  m_9?: string
  m_10?: string
  m_11?: string
  m_12?: string
  m_13?: string
  m_14?: string
  m_15?: string
}
