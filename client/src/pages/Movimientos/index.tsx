import { useEffect, useState } from "react";
import DataTableComponent from "../../components/DataTable";
import movimientosService from "../../services/movimientosService";
import { ColumnProps } from "../../types/column";
import { Movimiento } from "../../types/movimientos";
let emptyItem: Movimiento = {
  id: 0,
  m_1: "",
  m_2: "",
  m_3: "",
  m_4: "",
  m_5: "",
  m_6: "",
  m_7: "",
  m_8: "",
  m_9: "",
  m_10: "",
  m_11: "",
  m_12: "",
  m_13: "",
  m_14: "",
  m_15: "",
};
export default function page() {
  const [items, setItems] = useState<Movimiento[]>([]);
  const [item, setItem] = useState<Movimiento>(emptyItem);
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
      body: (rowData: Movimiento): any => {
        const trimedString = rowData.m_1.split("|");
        return (
          <div>
            <p style={{ color: "green" }}>{trimedString[0]}</p>
            {trimedString[1]}
          </div>
        );
      },
    },
    {
      field: "m_2",
      header: "2",
      body: (rowData: Movimiento): any => {
        const trimedString = rowData.m_2.split("|");
        return (
          <div>
            <p style={{ color: "green" }}>{trimedString[0]}</p>
            {trimedString[1]}
          </div>
        );
      },
    },
    {
      field: "m_3",
      header: "3",
      body: (rowData: Movimiento): any => {
        const trimedString = rowData.m_3.split("|");
        return (
          <div>
            <p style={{ color: "green" }}>{trimedString[0]}</p>
            {trimedString[1]}
          </div>
        );
      },
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
