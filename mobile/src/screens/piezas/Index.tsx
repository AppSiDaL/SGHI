import { useQuery } from "react-query";
import piezasService from "../../services/piezasService";
import { Part } from "../../types/piezas";
import { ScrollView, Text, View } from "react-native";
import TableComponent from "../../components/Table/Index";
import TableSkeleton from "../../components/Table/TableSkeleton";

export default function Index() {
  const titles = ["Orden", "Codigo", "Descrip.", "QT", "Area"];

  const {
    data: piezas,
    error,
    isLoading,
  } = useQuery("piezas", () =>
    piezasService.getItems().then((response) => {
      return response.data;
    })
  );


  if (isLoading) {
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
        <TableSkeleton />
      </>
    );
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
            backgroundColor: "#fff",
          }}
        >
          Piezas
        </Text>
      </View>
      <ScrollView>
        <TableComponent piezas={piezas} titles={titles} />
      </ScrollView>
    </>
  );
}
