export interface Orden {
  id: number;
  r3: number;
  departamento: string;
  codigo: string;
  estado: string;
  avance: number;
  cotizado: number;
  material: number;
  manoObra: number;
  total: number;
  fecha_solicitud: string;
  fecha_autorizacion: string;
  fecha_salida: string;
  dias: number;
  prioridad: number;
}
