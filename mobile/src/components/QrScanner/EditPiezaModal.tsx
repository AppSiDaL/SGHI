import { Button, Card, Input, Text } from "@rneui/themed";
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Part } from "../../types/piezas";
import DropDownAreas from "./DropDownAreas";
import { useMutation, useQueryClient } from "react-query";
import piezasService from "../../services/piezasService";

interface EditPiezaModalProps {
  pieza: Part | null;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditPiezaModal({
  pieza,
  visible,
  setVisible,
}: EditPiezaModalProps) {
  const [area, setArea] = useState<string | null>(null);
  const queryClient = useQueryClient();
  console.log(pieza)
  const mutation = useMutation(
    (newPart: any) => piezasService.changePart(newPart.id, newPart),
    {
      onSuccess: (data: any) => {
        Alert.alert("Pieza actualizada");
        queryClient.invalidateQueries("piezas");
      },
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );

  const savePieza = () => {
    setVisible(!visible);
    const modifiedPart = { ...pieza, area };
    mutation.mutate(modifiedPart);
  };
  const closeModal = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <Card>
          <Text h4>Pieza ID: {pieza?.id}</Text>
          <Text>OT: {pieza?.orden}</Text>
          <Text>Codigo: {pieza?.codigo}</Text>
          <Text style={{ fontWeight: "bold" }}>{pieza?.descripcion}</Text>
          <Text>{pieza?.cantidad} Pzas</Text>
          <Text style={{ textTransform: "capitalize" }}>{pieza?.estado}</Text>
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button radius={"sm"} type="solid" onPress={savePieza}>
              Guardar
              <Entypo
                style={{ textAlign: "center" }}
                name="save"
                size={24}
                color="white"
              />
            </Button>
            <Button radius={"sm"} type="solid" onPress={closeModal} color="red">
              Descartar
              <Entypo
                style={{ textAlign: "center" }}
                name="trash"
                size={24}
                color="white"
              />
            </Button>
          </View>
        </Card>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
