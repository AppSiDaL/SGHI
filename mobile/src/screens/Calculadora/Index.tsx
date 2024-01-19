import { View, Text } from 'react-native'
import React from 'react'

export default function Index (): JSX.Element {
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
        <Text style={{ color: 'white', marginLeft: 15 }}>Calculadora</Text>
      </View>
    </>
  )
}
