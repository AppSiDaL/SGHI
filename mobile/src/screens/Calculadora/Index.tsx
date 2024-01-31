import * as React from 'react'
import { SegmentedButtons } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Head from '../../components/Head'
import Cilinders from './Cilinders'
import Cubes from './Cubes'

export default function Index (): JSX.Element {
  const [value, setValue] = React.useState('cilindros')

  return (
    <SafeAreaView>
      <Head title='calculadora' />
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'cilindros',
            icon: 'cylinder',
            label: 'Cilindros'
          },
          {
            value: 'cubos',
            icon: 'cube',
            label: 'Cubos'
          }
        ]}
      />
      {value === 'cilindros'
        ? (
        <Cilinders/>
          )
        : (
        <Cubes/>
          )}
    </SafeAreaView>
  )
}
