import React from 'react'
import { View } from 'react-native'
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'

export default function HelloWorld (): JSX.Element {
  return (
    <MotiView animate={{ backgroundColor: 'fffff' }}>
      <Spacer />
      <Skeleton colorMode="light" width={'100%'} height={40} />
      {[...Array(9)].map((_, i) => (
        <React.Fragment key={i}>
          <Skeleton colorMode="light" width={'100%'} height={50} />
          <Spacer height={8} />
        </React.Fragment>
      ))}
    </MotiView>
  )
}

const Spacer = ({ height = 16 }: any): JSX.Element => (
  <View style={{ height }} />
)
