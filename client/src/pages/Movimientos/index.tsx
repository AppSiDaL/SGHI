import { useEffect, useState } from "react";
import DataTableComponent from "../../components/DataTable";
import movimientosService from "../../services/movimientosService";
import { Herramienta } from "../../types/herramientas";
import { ColumnProps } from "../../types/column";
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
  const [item, setItem] = useState<Herramienta | Part>(emptyItem);
  useEffect(() => {
    movimientosService
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
      field: "m_1",
      header: "1",
      body: undefined,
    },
    {
      field: "m_2",
      header: "2",
      body: undefined,
    },
    {
      field: "m_3",
      header: "3",
      body: undefined,
    },
    {
      field: "m_4",
      header: "4",
      body: undefined,
    },
    {
      field: "m_5",
      header: "5",
      body: undefined,
    },
    {
      field: "m_6",
      header: "6",
      body: undefined,
    },
    {
      field: "m_7",
      header: "7",
      body: undefined,
    },
    {
      field: "m_8",
      header: "8",
      body: undefined,
    },
    {
      field: "m_9",
      header: "9",
      body: undefined,
    },
    {
      field: "m_10",
      header: "11",
      body: undefined,
    },
    {
      field: "m_11",
      header: "11",
      body: undefined,
    },
    {
      field: "m_12",
      header: "12",
      body: undefined,
    },
    {
      field: "m_13",
      header: "13",
      body: undefined,
    },
    {
      field: "m_14",
      header: "14",
      body: undefined,
    },
    {
      field: "m_15",
      header: "15",
      body: undefined,
    },
  ];
  return (
    <>
      <DataTableComponent
        emptyItem={emptyItem}
        service={movimientosService}
        items={items}
        setItems={setItems}
        columns={columns}
        item={item}
        setItem={setItem}
      />
    </>
  );
}
