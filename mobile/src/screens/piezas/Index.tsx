import { useQuery } from "react-query";
import piezasService from "../../services/piezasService";
import { Part } from "../../types/piezas";
import { Text, View } from "react-native";
import TableComponent from "../../components/Table/Index";

export default function Index() {
  const titles = ["Orden", "Codigo", "Descrip.", "QTY", "Area"];

  const {
    data: piezas,
    error,
    isLoading,
  } = useQuery("piezas", () =>
    piezasService.getItems().then((response) => {
      return response.data;
    })
  );
  const piezasMapped = piezas?.map((item: Part) => [
    item.orden,
    item.codigo,
    item.descripcion,
    item.cantidad,
    item.area,
  ]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>An error has occurred: {(error as Error).message}</Text>;
  }

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
      <TableComponent piezas={piezasMapped} titles={titles} />
    </>
  );
}
