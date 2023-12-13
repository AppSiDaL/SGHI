import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Corte", value: "torno" },
  { label: "Torno C.", value: "torno C." },
  { label: "Fresa C.", value: "fresa C." },
  { label: "Temple", value: "temple" },
  { label: "R. Plano", value: "r. plano" },
  { label: "R. Cilin.", value: "r. cilin." },
  { label: "R. Vertical", value: "r. vertical" },
  { label: "Torno CNC", value: "torno cnc" },
  { label: "Fresa CNC", value: "fresa cnc" },
  { label: "EDM Hilo", value: "edm hilo" },
  { label: "EDM Pen.", value: "edm pen." },
  { label: "A. Moldes", value: "a. moldes" },
  { label: "A. Troqueles", value: "a. troqueles" },
  { label: "Proyectos", value: "proyectos" },
  { label: "Calidad", value: "calidad" },
];

interface dropDownAreasProps{
    value: string | null;
    setValue: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function DropDownAreas({value, setValue}: dropDownAreasProps) {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Area
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Area" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: any) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
