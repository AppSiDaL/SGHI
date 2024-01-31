import React from 'react'
import { type Part } from '../../types/piezas'
import { Text, View } from 'react-native'
import { Card, Chip, Divider } from 'react-native-paper'

interface PiezaCardProps {
  pieza: Part
}

export default function Index ({ pieza }: PiezaCardProps): JSX.Element {
  const estatusColor = (estatus: string): string => {
    switch (estatus) {
      case 'procesando':
        return 'green'
      case 'ajustando':
        return 'orange'
      case 'entregado':
        return 'blue'
      case 'detenido':
        return 'red'
      default:
        return 'grey'
    }
  }
  return (
    <Card style={{ marginTop: 10 }}>
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
          {pieza.orden}
        </Text>
        <Text
          style={{
            textTransform: 'capitalize',
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          {pieza.descripcion}
        </Text>
        <Text
          style={{
            color: 'grey',
            textTransform: 'capitalize',
            flex: 1,
            textAlign: 'right'
          }}
        >
          {pieza.codigo + ' -|- #' + pieza.numero_pieza}
        </Text>
      </View>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center'
        }}
      >
        <Chip selectedColor={estatusColor(pieza.estado)} mode='outlined' textStyle={{ textTransform: 'capitalize' }}>{pieza.estado}</Chip>
        <Text style={{ textTransform: 'capitalize' }}>{pieza.cantidad}</Text>
        <Text style={{ textTransform: 'capitalize' }}>{pieza.area}</Text>
        <Text style={{ textTransform: 'capitalize' }}>
          {pieza.fecha_entrada}
        </Text>
      </View>
    </Card>
  )
}
