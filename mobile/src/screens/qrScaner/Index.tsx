import { Pressable, View } from 'react-native'
import { useQuery } from 'react-query'
import QrScaner from '../../components/QrScanner/Index'
import React, { useState } from 'react'
import type { Part } from '../../types/piezas'
import EditPiezaModal from '../../components/QrScanner/EditPiezaModal'
import { SafeAreaView } from 'react-native-safe-area-context'
import Head from '../../components/Head'
import { useFocusEffect } from '@react-navigation/native'
import { Text } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
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
      setVisible(true)
      setFinded(true)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setScanned(true)
        setFinded(true)
        setVisible(false)
      }
    }, [])
  )

  return (
    <SafeAreaView>
      <View>
        <Head title="Scanner" />
        {scanned && (
          <View>
            <Pressable
              onPress={() => {
                setScanned(!scanned)
                setFinded(false)
              }}
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                backgroundColor: 'gray',
                opacity: 0.3,
                paddingBottom: 100
              }}
            >
              <FontAwesome
                name="camera"
                size={100}
                color="black"
                style={{ alignSelf: 'center' }}
              />
              <Text style={{ textAlign: 'center' }}>
                Presiona Para Escanear
              </Text>
            </Pressable>
          </View>
        )}
      </View>
      <View>
        {finded
          ? (
          <EditPiezaModal
            visible={visible}
            setVisible={setVisible}
            pieza={pieza}
          />
            )
          : (
          <QrScaner
            scanned={scanned}
            setScanned={setScanned}
            handleBarCodeScanned={handleBarCodeScanned}
          />
            )}
      </View>
    </SafeAreaView>
  )
}
