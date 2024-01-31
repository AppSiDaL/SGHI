import { View, Text, Image } from 'react-native'

import React from 'react'

interface CilindersProps {
  A: number
  B: number
}

export default function FigureCilinders ({ A, B }: CilindersProps): JSX.Element {
  return (
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            width: 300,
            height: 300,
            position: 'relative',
            marginTop: 400
          }}
        >
          <Image
            style={{ width: '100%', height: '100%' }}
            source={require('../../../assets/cilinder.png')}
          />
          <Text
            style={{
              position: 'absolute',
              textAlign: 'center',
              fontSize: 20,
              width: 80,
              zIndex: 3,
              top: '4%',
              left: '40%',
              transform: [{ rotate: '30deg' }]
            }}
          >
            { A === 0 ? 'A' : Math.ceil(A * 4) / 4}
          </Text>
          <Text
            style={{
              position: 'absolute',
              textAlign: 'center',
              fontSize: 20,
              width: 80,
              zIndex: 4,
              top: '48%',
              right: '0%',
              transform: [{ rotate: '-25deg' }]
            }}
          >
            ⌀{ B === 0 ? 'B' : Math.ceil(B * 4) / 4}
          </Text>
        </View>
      </View>
    </View>
  )
}
