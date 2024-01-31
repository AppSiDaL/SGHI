import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { type Part } from '../../types/piezas'
import DropDownAreas from './DropDownAreas'
import { useMutation, useQueryClient } from 'react-query'
import piezasService from '../../services/piezasService'
import { Portal, Text, Modal, Chip, Button } from 'react-native-paper'

interface EditPiezaModalProps {
  pieza: Part | null
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function EditPiezaModal ({
  pieza,
  visible,
  setVisible
}: EditPiezaModalProps): JSX.Element {
  const [area, setArea] = useState<string | undefined>(undefined)
  const queryClient = useQueryClient()
  const mutation = useMutation(
    async (newPart: any) =>
      await piezasService.changePart(newPart.id as number, newPart),
    {
      onSuccess: async (data: any) => {
        Alert.alert('Pieza actualizada')
        await queryClient.invalidateQueries('piezas')
      },
      onError: (error: Error) => {
        console.log(error)
      }
    }
  )

  const savePieza = (): void => {
    setVisible(!visible)
    const modifiedPart = { ...pieza, area }
    mutation.mutate(modifiedPart)
  }
  useEffect(() => {
    if (pieza !== null) {
      setArea(pieza.area)
    }
  }, [pieza])
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => {
          setVisible(!visible)
        }}
        contentContainerStyle={{
          backgroundColor: 'white',
          marginTop: 'auto',
          marginBottom: 20,
          padding: 20,
          borderRadius: 10
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Text
            style={{
              color: 'grey',
              textTransform: 'capitalize',
              flex: 1,
              textAlign: 'left'
            }}
          >
            {pieza?.orden}
          </Text>
          <Text
            style={{
              textTransform: 'capitalize',
              flex: 1,
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            {pieza?.descripcion}
          </Text>
          <Text
            style={{
              color: 'grey',
              textTransform: 'capitalize',
              flex: 1,
              textAlign: 'right'
            }}
          >
            {pieza?.codigo + ' -|- #' + pieza?.numero_pieza}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Chip
            selectedColor="blue"
            mode="outlined"
            textStyle={{ textTransform: 'capitalize' }}
          >
            {pieza?.estado}
          </Chip>
          <Text>{pieza?.cantidad}</Text>
          <Text>{pieza?.fecha_entrada}</Text>
        </View>
        <DropDownAreas value={area} setValue={setArea} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Button
            icon="content-save"
            mode="outlined"
            textColor="green"
            onPress={() => {
              savePieza()
            }}
          >
            Guardar
          </Button>
          <Button
            icon="delete"
            mode="outlined"
            textColor="red"
            onPress={() => {
              setVisible(!visible)
            }}
          >
            Descartar
          </Button>
        </View>
      </Modal>
    </Portal>
  )
}
