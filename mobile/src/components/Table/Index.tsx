import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Table, Row, TableWrapper, Cell } from "react-native-reanimated-table";
import React, { useState } from "react";
import EditPiezaModal from "../QrScanner/EditPiezaModal";
import { Part } from "../../types/piezas";
import { Icon, Input } from "@rneui/themed";

interface TableComponentProps {
  piezas: any;
  titles: Array<string>;
}

export default function TableComponent({
  piezas,
  titles,
}: TableComponentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(false);
  const [pieza, setPieza] = useState<Part | null>(null);
  const piezasMapped = piezas?.map((item: Part) => [
    item.orden,
    item.codigo,
    item.descripcion,
    item.cantidad,
    item.area,
    item.id,
  ]);
  const filteredPiezas = piezasMapped.filter((pieza: any) =>
    pieza[2]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleButtonPress = (rowData: any) => {
    setVisible(true);
    const piezaFinded = piezas.find((pieza: Part) => pieza.id === rowData[5]);
    setPieza(piezaFinded);
  };

  const flexArr = [1, 1, 2, 0.5, 2];

  return (
    <>
      {visible && (
        <EditPiezaModal
          visible={visible}
          setVisible={setVisible}
          pieza={pieza}
        />
      )}
      <View style={styles.container}>
        <Input
          leftIcon={<Icon name="search" size={24} color="black" />}
          onChangeText={setSearchTerm}
          value={searchTerm}
          placeholder="Buscar..."
        />
        <ScrollView>
          <Table borderStyle={{ borderWidth: 1 }}>
            <Row
              data={titles}
              flexArr={flexArr}
              style={styles.head}
              textStyle={styles.text}
            />
            {filteredPiezas.map((rowData: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleButtonPress(rowData)}
              >
                <TableWrapper style={styles.row}>
                  {rowData
                    .filter(
                      (_: any, cellIndex: number) =>
                        cellIndex < rowData.length - 1
                    )
                    .map((cellData: any, cellIndex: number) => (
                      <View
                        key={cellIndex}
                        style={{ flex: flexArr[cellIndex], borderWidth: 0.7 }}
                      >
                        <Cell data={cellData} textStyle={styles.text} />
                      </View>
                    ))}
                </TableWrapper>
              </TouchableOpacity>
            ))}
          </Table>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "#01BDFF" },
  text: { margin: 6 },
  row: { flexDirection: "row" },
});
