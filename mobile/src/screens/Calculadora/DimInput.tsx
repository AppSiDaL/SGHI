import { View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

interface DimInputProps {
  DimA: number
  setDimA: React.Dispatch<React.SetStateAction<number>>
  DimB: number
  setDimB: React.Dispatch<React.SetStateAction<number>>
  DimC?: number
  setDimC?: React.Dispatch<React.SetStateAction<number>>
}

export default function DimInput ({
  DimA,
  setDimA,
  DimB,
  setDimB,
  DimC,
  setDimC
}: DimInputProps): JSX.Element {
  const [A, setA] = useState('')
  const [B, setB] = useState('')
  const [C, setC] = useState('')
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <TextInput
        style={{ width: DimC !== undefined ? '33%' : '50%', margin: 5 }}
        label="A"
        keyboardType="numeric"
        value={String(A)}
        onChange={(e) => {
          const value = e.nativeEvent.text
          setA(value)
          const dim = Number(Number(value) + 6) / 25.4
          setDimA(Number(dim.toFixed(2)))
        }}
      />
      <TextInput
        style={{ width: DimC !== undefined ? '33%' : '50%', margin: 5 }}
        keyboardType="numeric"
        label="B"
        value={String(B)}
        onChange={(e) => {
          const value = e.nativeEvent.text
          setB(value)
          const dim = Number(Number(value) + 6) / 25.4
          setDimB(Number(dim.toFixed(2)))
        }}
      />
      {DimC !== undefined && setDimC !== undefined && (
        <TextInput
          style={{ width: '33%', margin: 5 }}
          label="C"
          keyboardType="numeric"
          value={String(C)}
          onChange={(e) => {
            setC(e.nativeEvent.text)
          }}
        />
      )}
    </View>
  )
}
