import { View, Text } from "react-native";
import TableComponent from "../../components/Table/Index";
import { useEffect, useState } from "react";
import piezasService from "../../services/piezasService";
import { Part } from "../../types/piezas";

export default function Index() {
  const [piezas, setPiezas] = useState([]);
  const titles = ["Orden", "Codigo", "Descrip.", "QTY", "Area"];
  useEffect(() => {
    piezasService
      .getItems()
      .then((response) => {
        const formattedData = response.data.map((item: Part) => [
          item.orden,
          item.codigo,
          item.descripcion,
          item.cantidad,
          item.area,
        ]);
        setPiezas(formattedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            paddingTop: 30,
          }}
        >
          Piezas
        </Text>
      </View>
      <TableComponent piezas={piezas} setPiezas={setPiezas} titles={titles} />
    </>
  );
}
