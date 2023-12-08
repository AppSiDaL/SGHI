export interface Orden {
  id: number;
  orden: number;
  r3: number;
  departamento: string;
  codigo: string;
  estado: string;
  avance: number;
  costo_cotizado: number;
  costo_material: number;
  costo_mano_obra: number;
  costo_total: number;
  fecha_solicitud: string;
  fecha_autorizacion: string;
  fecha_salida: string;
  dias: number;
  prioridad: number;
}
