import { useState, useEffect } from "react";
import { Button, DataTable, Text } from "react-native-paper";
import { Part } from "../../types/piezas";
import piezasService from "../../services/piezasService";
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const MyComponent = () => {
  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([5, 10, 15]);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );
  const [piezas, setPiezas] = useState<Part[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    piezasService
      .getItems()
      .then((response) => {
        setPiezas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, piezas.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Orden</DataTable.Title>
          <DataTable.Title>Descripcion</DataTable.Title>
          <DataTable.Title>Area</DataTable.Title>
        </DataTable.Header>

        {piezas.slice(from, to).map((item, key) => (
          <DataTable.Row key={key}>
            <DataTable.Cell>
              <Text numberOfLines={3} style={{width:50}} ellipsizeMode="tail">
                {item.orden}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text numberOfLines={3} ellipsizeMode="tail">
                {item.descripcion}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>{item.area}</DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(piezas.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${piezas.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        />
      </DataTable>
      <View style={{ backgroundColor: "red" }}>
        <Button onPress={() => navigation.navigate("Scanner" as never)}>
          <Text>Scann</Text>
        </Button>
      </View>
    </>
  );
};

export default MyComponent;
