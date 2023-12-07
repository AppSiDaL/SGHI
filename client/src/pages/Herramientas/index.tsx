import { useEffect, useState } from "react";
import DataTableComponent from "../../components/DataTable";
import herramientasService from "../../services/herramientasService";
import { Herramienta } from "../../types/herramientas";
import { ColumnProps } from "../../types/column";
import { Button } from "primereact/button";
import { Part } from "../../types/piezas";
let emptyItem: Herramienta = {
  id: 0,
  codigo: "",
  pieza: "",
  descripcion: "",
  fecha_modificacion: "",
  dibujo: "",
};
export default function page() {
  const [items, setItems] = useState<Herramienta[]>([]);
  const [visiblePDF, setVisiblePDF] = useState(false);
  const [item, setItem] = useState<Herramienta | Part>(emptyItem);
  useEffect(() => {
    herramientasService
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
      field: "fecha_modificacion",
      header: "Mod.",
      body: undefined,
    },
    {
      field: "dibujo",
      header: "Dibujo",
      body: (rowData: Herramienta) => (
        <Button
          label="Ver"
          icon="pi pi-file-pdf"
          className="p-button-danger"
          onClick={() => {
            setVisiblePDF(true);
            setItem(rowData);
          }}
        />
      ),
    },
  ];
  return (
    <>
      <DataTableComponent
      emptyItem={emptyItem}
      service={herramientasService}
        items={items}
        setItems={setItems}
        columns={columns}
        visiblePDF={visiblePDF}
        setVisiblePDF={setVisiblePDF}
        item={item}
        setItem={setItem}
      />
    </>
  );
}
