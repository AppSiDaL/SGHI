import * as React from 'react'
import { View } from 'react-native'
import { DataTable } from 'react-native-paper'

interface DimTableCilinderProps {
  dims: Array<{ dim: number, name: string }>
}

export default function DimTableCilinder ({ dims }: DimTableCilinderProps): JSX.Element {
  const inToMm = 25.4
  const values = dims.map(({ dim, name }) => {
    const Dim = (dim * inToMm) - 6
    return {
      name,
      in1: Math.floor(dim * 4) / 4,
      mm1: Math.floor(dim * 4) / 4 * inToMm,
      tol1: Number(((Math.floor(dim * 4) / 4) * inToMm) - Dim).toFixed(2),
      in2: Math.ceil(dim * 4) / 4,
      mm2: Math.ceil(dim * 4) / 4 * inToMm,
      tol2: Number(((Math.ceil(dim * 4) / 4) * inToMm) - Dim).toFixed(2),
      in3: Math.ceil(dim * 2) / 2,
      mm3: Math.ceil(dim * 2) / 2 * inToMm,
      tol3: Number(((Math.ceil(dim * 2) / 2) * inToMm) - Dim).toFixed(2)
    }
  })

  return (
    <View style={{ marginTop: '70%' }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>IN</DataTable.Title>
          <DataTable.Title >MM</DataTable.Title>
          <DataTable.Title >TOL</DataTable.Title>
          <DataTable.Title>IN</DataTable.Title>
          <DataTable.Title >MM</DataTable.Title>
          <DataTable.Title >TOL</DataTable.Title>
          <DataTable.Title>IN</DataTable.Title>
          <DataTable.Title >MM</DataTable.Title>
          <DataTable.Title >TOL</DataTable.Title>
        </DataTable.Header>
        {values.map((value) => (
          <DataTable.Row key={value.name}>
            <DataTable.Cell>{value.in1}</DataTable.Cell>
            <DataTable.Cell numeric>{value.mm1}</DataTable.Cell>
            <DataTable.Cell numeric>{value.tol1}</DataTable.Cell>
            <DataTable.Cell>{value.in2}</DataTable.Cell>
            <DataTable.Cell numeric>{value.mm2}</DataTable.Cell>
            <DataTable.Cell numeric>{value.tol2}</DataTable.Cell>
            <DataTable.Cell>{value.in3}</DataTable.Cell>
            <DataTable.Cell numeric>{value.mm3}</DataTable.Cell>
            <DataTable.Cell numeric>{value.tol3}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  )
}
