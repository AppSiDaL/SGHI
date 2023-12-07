import { useEffect, useState } from "react";
import DataTableComponent from "../../components/DataTable";
import ordenesService from "../../services/ordenesService";
import { Orden } from "../../types/orden";
import { ColumnProps } from "../../types/column";
import { Part } from "../../types/piezas";
import { Herramienta } from "../../types/herramientas";
import { Tag } from "primereact/tag";
let emptyItem: Orden = {
  id: 0,
  orden: 0,
  r3: 0,
  departamento: "",
  codigo: "",
  estado: "",
  avance: 0,
  costo_cotizado: 0,
  costo_material: 0,
  costo_mano_obra: 0,
  costo_total: 0,
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
  const getSeverity = (product: Orden) => {
    switch (product.estado.toLowerCase()) {
      case "procesando":
        return "success";

      case "ajustando":
        return "warning";

      case "detenido":
        return "danger";

      default:
        return null;
    }
  };
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
      body: (rowData: Orden) => (
        <div style={{ textTransform: "capitalize" }}>
          {" "}
          {rowData.departamento}{" "}
        </div>
      ),
    },
    {
      field: "codigo",
      header: "Code",
      body: undefined,
    },
    {
      field: "estado",
      header: "Estado",
      body: (rowData: Orden) => (
        <Tag
          value={rowData.estado}
          className="capitalize"
          severity={getSeverity(rowData)}
        ></Tag>
      ),
    },
    {
      field: "avance",
      header: "%",
      body: (rowData: Orden) => <>{rowData.avance + "%"}</>,
    },
    {
      field: "costo_cotizado",
      header: "$",
      body: (rowData: Orden) => (
        <>
          {rowData.costo_cotizado.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </>
      ),
    },
    {
      field: "costo_material",
      header: "$MA",
      body: (rowData: Orden) => (
        <>
          {rowData.costo_material.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </>
      ),
    },
    {
      field: "costo_mano_obra",
      header: "$MO",
      body: (rowData: Orden) => (
        <>
          {rowData.costo_mano_obra.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </>
      ),
    },
    {
      field: "costo_total",
      header: "$T",
      body: (rowData: Orden) => (
        <>
          {rowData.costo_total.toLocaleString("es-MX", {
            style: "currency",
            currency: "MXN",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </>
      ),
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
      header: "D",
      body: undefined,
    },
    {
      field: "prioridad",
      header: "P",
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
