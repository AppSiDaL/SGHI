import React from 'react'
import { Text } from 'react-native-paper'

interface HeadProps {
  title: string
}

export default function Head ({ title }: HeadProps): JSX.Element {
  return (
    <>
     <Text variant="displaySmall" style={{ textTransform: 'uppercase', textAlign: 'center' }}>{title}</Text>
    </>
  )
}
