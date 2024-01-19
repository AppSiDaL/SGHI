import { View } from 'react-native'
import { useQuery } from 'react-query'
import QrScaner from '../../components/QrScanner/Index'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import type { Part } from '../../types/piezas'
import { Text } from '@rneui/themed'
import EditPiezaModal from '../../components/QrScanner/EditPiezaModal'
export default function Calculadora (): JSX.Element {
  const [scanned, setScanned] = useState(false)
  const [finded, setFinded] = useState(false)
  const [visible, setVisible] = useState(true)
  const [pieza, setPieza] = useState<Part | null>(null)
  const { data: piezas } = useQuery<Part[]>('piezas')

  const handleBarCodeScanned = ({
    type,
    data
  }: {
    type: string
    data: string
  }): void => {
    setScanned(true)
    const piezaFiltered = piezas?.filter((pieza) => pieza.id === Number(data))
    if (data !== null && piezaFiltered !== undefined) {
      setPieza(piezaFiltered[0])
      setFinded(true)
    }
  }

  return (
    <>
      <View
        style={{
          paddingTop: 40,
          backgroundColor: '#2C70DB',
          alignItems: 'center',
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Text style={{ color: 'white', marginLeft: 15 }}>Scanner</Text>
        {scanned && (
          <Ionicons
            name="reload"
            onPress={() => {
              setScanned(false)
              setFinded(false)
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
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {finded
          ? (
          <>
            <EditPiezaModal
              visible={visible}
              setVisible={setVisible}
              pieza={pieza}
            />
          </>
            )
          : (
          <QrScaner
            scanned={scanned}
            setScanned={setScanned}
            handleBarCodeScanned={handleBarCodeScanned}
          />
            )}
      </View>
    </>
  )
}
