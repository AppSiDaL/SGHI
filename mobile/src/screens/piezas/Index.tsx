import { useQuery } from 'react-query'
import piezasService from '../../services/piezasService'
import { Text, View } from 'react-native'
import TableComponent from '../../components/Table/Index'
import TableSkeleton from '../../components/Table/TableSkeleton'
import React from 'react'

export default function Index (): JSX.Element {
  const titles = ['Orden', 'Code', 'Descrip.', 'Qt', 'Area']

  const {
    data: piezas,
    error,
    isLoading
  } = useQuery('piezas', async () =>
    await piezasService.getItems().then((response) => {
      return response.data
    })
  )

  if (isLoading) {
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
          <Text style={{ color: 'white', marginLeft: 15 }}>Piezas</Text>
        </View>
        <TableSkeleton />
      </>
    )
  }

  if (error !== undefined) {
    return <Text>An error has occurred: {(error as Error).message}</Text>
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
        <Text style={{ color: 'white', marginLeft: 15 }}>Piezas</Text>
      </View>
      <TableComponent piezas={piezas} titles={titles} />
    </>
  )
}
