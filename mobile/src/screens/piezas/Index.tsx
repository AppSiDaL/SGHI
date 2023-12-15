import { useQuery } from "react-query";
import piezasService from "../../services/piezasService";
import { Part } from "../../types/piezas";
import { ScrollView, Text, View } from "react-native";
import TableComponent from "../../components/Table/Index";
import TableSkeleton from "../../components/Table/TableSkeleton";

export default function Index() {
  const titles = ["Orden", "Code", "Descrip.", "Qt", "Area"];

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
        <View
          style={{
            paddingTop: 40,
            backgroundColor: "#2C70DB",
            alignItems: "center",
            height: 70,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", marginLeft: 15 }}>Piezas</Text>
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
      <View
        style={{
          paddingTop: 40,
          backgroundColor: "#2C70DB",
          alignItems: "center",
          height: 70,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white", marginLeft: 15 }}>Piezas</Text>
      </View>
      <TableComponent piezas={piezas} titles={titles} />
    </>
  );
}
