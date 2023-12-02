import { useEffect, useState } from "react";
import DataTableComponent from "../../components/DataTable";
import ordenesService from "../../services/ordenesService";
import { Orden } from "../../types/orden";
import { ColumnProps } from "../../types/column";
import { Part } from "../../types/piezas";
import { Herramienta } from "../../types/herramientas";
let emptyItem: Orden = {
  id: 0,
  r3: 0,
  departamento: "",
  codigo: "",
  estado: "",
  avance: "",
  cotizado: 0,
  material: 0,
  manoObra: 0,
  total: 0,
  fecha_solicitud: "",
  fecha_autorizacion: "",
  fecha_salida: "",
  dias: 0,
  prioridad: 0,
};
export default function index() {
  const [items, setItems] = useState<Orden[]>([]);
  const [item, setItem] = useState<Herramienta | Part | Orden>(emptyItem);
  useEffect(() => {
    ordenesService
      .getItems()
      .then((data: any) => {
        setItems(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const columns: ColumnProps[] = [
    {
      field: "id",
      header: "ID",
      body: undefined,
    },
    {
      field: "r3",
      header: "R3",
      body: undefined,
    },
    {
      field: "departamento",
      header: "Depto.",
      body: undefined,
    },
    {
      field: "codigo",
      header: "Codigo",
      body: undefined,
    },
    {
      field: "estado",
      header: "Estado",
      body: undefined,
    },
    {
      field: "avance",
      header: "%",
      body: undefined,
    },
    {
      field: "cotizado",
      header: "$",
      body: undefined,
    },
    {
      field: "material",
      header: "$MA",
      body: undefined,
    },
    {
      field: "mano_obra",
      header: "$MO",
      body: undefined,
    },
    {
      field: "total",
      header: "$T",
      body: undefined,
    },
    {
      field: "fecha_solicitud",
      header: "Fecha S.",
      body: undefined,
    },
    {
      field: "fecha_autorizacion",
      header: "Fecha A.",
      body: undefined,
    },
    {
      field: "fecha_salida",
      header: "Fecha SA.",
      body: undefined,
    },
    {
      field: "dias",
      header: "Dias",
      body: undefined,
    },
    {
      field: "prioridad",
      header: "Prioridad",
      body: undefined,
    },
  ];
  return (
    <>
      <DataTableComponent
        emptyItem={emptyItem}
        service={ordenesService}
        items={items}
        setItems={setItems}
        columns={columns}
        item={item}
        setItem={setItem}
      />
    </>
  );
}
