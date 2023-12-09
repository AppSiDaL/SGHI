import { StyleSheet, View } from "react-native";
import { Table, Row, Rows, TableWrapper } from "react-native-reanimated-table";

interface TableComponentProps {
  piezas: any;
  setPiezas: Function;
  titles: Array<string>;
}

export default function TableComponent({
  piezas,
  setPiezas,
  titles,
}: TableComponentProps) {
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={titles}
          flexArr={[1, 1, 2, 0.5, 2]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Rows
            data={piezas}
            flexArr={[1, 1, 2, 0.5, 2]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#f6f8fa" },
  row: { height: 50 },
  text: { textAlign: "center" },
});
