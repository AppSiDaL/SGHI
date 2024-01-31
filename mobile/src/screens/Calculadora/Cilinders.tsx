import { View } from 'react-native'
import React, { useState } from 'react'
import FigureCilinders from './FigureCilinder'
import DimInput from './DimInput'
import DimTableCilinder from './DimTableCilinder'

export default function Cilinders (): JSX.Element {
  const [DimA, setDimA] = useState(0)
  const [DimB, setDimB] = useState(0)

  const dims = [
    { name: 'A', dim: DimA },
    { name: 'B', dim: DimB }
  ]

  return (
    <View>
      <DimInput DimA={DimA} DimB={DimB} setDimA={setDimA} setDimB={setDimB} />
      <FigureCilinders A={DimA} B={DimB} />
      <DimTableCilinder dims={dims}/>
    </View>
  )
}
