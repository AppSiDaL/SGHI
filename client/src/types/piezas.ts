import { type Herramienta } from './herramientas'

export interface Part {
  id: number
  orden: string | number
  codigo: string
  numero_pieza: string | number
  descripcion: string
  cantidad: number
  estado: string
  area: string
  fecha_entrada: string
  fecha_salida: string
  dias: number
  observaciones: string
}

export interface PartDraw {
  id: number
  orden: string | number
  codigo: string
  numero_pieza: string | number
  descripcion: string
  cantidad: number
  estado: string
  area: string
  fecha_entrada: string
  fecha_salida: string
  dias: number
  observaciones: string
  herramienta: Herramienta
}
