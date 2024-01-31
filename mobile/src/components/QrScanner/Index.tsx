import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

interface QRScannerProps {
  handleBarCodeScanned: ({
    type,
    data
  }: {
    type: string
    data: string
  }) => void
  scanned: boolean
  setScanned: React.Dispatch<React.SetStateAction<boolean>>
}

export default function QrScaner ({
  handleBarCodeScanned,
  scanned
}: QRScannerProps): JSX.Element {
  const [hasPermission, setHasPermission] = useState(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async (): Promise<void> => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions().catch((error) => {
      console.log(error)
    })
  }, [])

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>
  }

  return (
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={{ height: '100%', width: '100%' }}
    />
  )
}
