import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

interface QRScannerProps {
  handleBarCodeScanned: ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => void;
  scanned: boolean;
  setScanned: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function QrScaner({
  handleBarCodeScanned,
  scanned,
  setScanned,
}: QRScannerProps) {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
  );
}
