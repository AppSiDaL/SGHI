import { Alert, View } from "react-native";
import { useMutation, useQuery, useQueryClient } from "react-query";
import QrScaner from "../../components/QrScanner/Index";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import type { Part } from "../../types/piezas";
import { Button, Card, Input, Text } from "@rneui/themed";
import DropDownAreas from "../../components/QrScanner/DropDownAreas";
import { Entypo } from "@expo/vector-icons";
import piezasService from "../../services/piezasService";
export default function Calculadora() {
  const [area, setArea] = useState<string | null>(null);
  const [scanned, setScanned] = useState(false);
  const [finded, setFinded] = useState(false);
  const [pieza, setPieza] = useState<Part | null>(null);
  const { data: piezas } = useQuery<Part[]>("piezas");

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    const piezaFiltered = piezas?.filter((pieza) => pieza.id === Number(data));
    if (data && piezaFiltered) {
      setPieza(piezaFiltered[0]);
      setFinded(true);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation((newPart:any) => piezasService.changePart(newPart.id, newPart), {
    onSuccess: (data) => {
      Alert.alert("Pieza actualizada");
      queryClient.invalidateQueries('piezas');
    },
    onError: (error) => {
      console.log(error);
    },
  });
  
  const savePieza = () => {
    const modifiedPart = { ...pieza, area };
    mutation.mutate(modifiedPart);
  };

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
        <Text style={{ color: "white", marginLeft: 15 }}>Scanner</Text>
        {scanned && (
          <Ionicons
            name="reload"
            onPress={() => {
              setScanned(false);
              setFinded(false);
            }}
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
        )}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {finded ? (
          <>
            <Card>
              <Text h4>Pieza ID: {pieza?.id}</Text>
              <Text>OT: {pieza?.orden}</Text>
              <Text>Codigo: {pieza?.codigo}</Text>
              <Text style={{ fontWeight: "bold" }}>{pieza?.descripcion}</Text>
              <Text>{pieza?.cantidad} Pzas</Text>
              <Text style={{ textTransform: "capitalize" }}>
                {pieza?.estado}
              </Text>
              <Text>{pieza?.fecha_entrada}</Text>
              <Input
                style={{
                  textTransform: "capitalize",
                  marginTop: 20,
                  textAlign: "center",
                }}
                placeholder={pieza?.area}
                value={pieza?.area}
                disabled
              />
              <Entypo
                style={{ textAlign: "center" }}
                name="select-arrows"
                size={24}
                color="black"
              />
              <DropDownAreas setValue={setArea} value={area} />
              <Button radius={"sm"} type="solid" onPress={savePieza}>
                Guardar
                <Entypo
                  style={{ textAlign: "center" }}
                  name="save"
                  size={24}
                  color="white"
                />
              </Button>
            </Card>
          </>
        ) : (
          <QrScaner
            scanned={scanned}
            setScanned={setScanned}
            handleBarCodeScanned={handleBarCodeScanned}
          />
        )}
      </View>
    </>
  );
}
