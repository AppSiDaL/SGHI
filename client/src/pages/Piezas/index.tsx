import { useEffect, useState } from "react";
import DataTableComponent from "../../components/DataTable";
import piezasService from "../../services/piezasService";
import { ColumnProps } from "../../types/column";
import { Part } from "../../types/piezas";
import { Tag } from "primereact/tag";
import { InputText } from "primereact/inputtext";
import { Herramienta } from "../../types/herramientas";
let emptyItem: Part = {
  id: 0,
  orden: 0,
  codigo: "",
  numero_pieza: "",
  descripcion: "",
  cantidad: 0,
  estado: "",
  area: "",
  fecha_entrada: "",
  fecha_salida: "",
  dias: 0,
  observaciones: "",
};
interface piezaPageProps {
  theme: string;
}
export default function page({ theme }: piezaPageProps) {
  const [items, setItems] = useState<Part[]>([]);
  const [item, setItem] = useState<Herramienta | Part>(emptyItem);
  useEffect(() => {
    piezasService
      .getItems()
      .then((data: any) => {
        setItems(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const getSeverity = (product: Part) => {
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
    { field: "orden", header: "Orden", body: undefined },
    {
      field: "codigo",
      header: "Codigo",
      body: undefined,
    },
    {
      field: "numero_pieza",
      header: "#",
      body: undefined,
    },
    {
      field: "descripcion",
      header: "Descripcion",
      body: undefined,
    },
    {
      field: "cantidad",
      header: "QyT",
      body: undefined,
    },
    {
      field: "estado",
      header: "Estado",
      body: (rowData: Part) => (
        <Tag
          value={rowData.estado}
          className="capitalize"
          severity={getSeverity(rowData)}
        ></Tag>
      ),
    },
    {
      field: "area",
      header: "Area",
      body: (rowData: Part) => (
        <div style={{ textTransform: "capitalize" }}>{rowData.area}</div>
      ),
    },
    {
      field: "fecha_entrada",
      header: "Entrada",
      body: (rowData: Part) => (
        <InputText
          type="date"
          disabled
          style={{
            width: 130,
            color: theme === "dark" ? "#00C200" : "#0000FF",
            borderColor: theme === "dark" ? "#00C200" : "#0000FF",
            borderWidth: 2,
            fontWeight: "bold",
          }}
          className=" p-inputtext-sm"
          value={rowData.fecha_entrada}
        />
      ),
    },
    {
      field: "fecha_salida",
      header: "Salida",
      body: (rowData: Part) => (
        <InputText
          type="date"
          disabled
          style={{
            width: 130,
            color: "#FF0000",
            borderColor: "#FF0000",
            borderWidth: 2,
            fontWeight: "bold",
          }}
          className=" p-inputtext-sm"
          value={rowData.fecha_salida}
        />
      ),
    },
    {
      field: "dias",
      header: "Dias",
      body: undefined,
    },
    {
      field: "observaciones",
      header: "Obs.",
      body: undefined,
    },
  ];
  return (
    <>
      <DataTableComponent
        emptyItem={emptyItem}
        items={items}
        service={piezasService}
        setItems={setItems}
        columns={columns}
        item={item}
        setItem={setItem}
      />
    </>
  );
}
