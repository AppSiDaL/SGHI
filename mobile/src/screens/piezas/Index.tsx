import { useQuery } from 'react-query'
import piezasService from '../../services/piezasService'
import { Pressable, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PiezaCard from '../../components/PiezaCard/Index'
import { type Part } from '../../types/piezas'
import Head from '../../components/Head'
import { Searchbar } from 'react-native-paper'
import Skeleton from '../../components/PiezaCard/Skeleton'
import EditPiezaModal from '../../components/QrScanner/EditPiezaModal'

export default function Index (): JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [visible, setVisible] = React.useState(false)
  const [pieza, setPieza] = React.useState<Part | null>(null)
  const [piezasFiltered, setPiezasFiltered] = React.useState<Part[] | null>(
    null
  )
  const { data: piezas, isLoading } = useQuery<Part[]>(
    'piezas',
    async () =>
      await piezasService.getItems().then((response) => {
        return response.data
      })
  )

  useEffect(() => {
    setPiezasFiltered(piezas ?? null)
  }, [piezas])

  if (isLoading) {
    return (
      <SafeAreaView>
        <Head title="Piezas" />
        <Skeleton />
      </SafeAreaView>
    )
  }

  const handleFilter = (query: string): void => {
    setSearchQuery(query)
    const piezasFiltered = piezas?.filter((pieza) =>
      pieza.descripcion.toLowerCase().includes(query.toLowerCase())
    )
    setPiezasFiltered(piezasFiltered ?? null)
  }
  const handlePiezaPress = (pieza: Part): void => {
    setPieza(pieza)
    setVisible(true)
  }
  return (
    <SafeAreaView>
      <Head title="Piezas" />
      <Searchbar
        placeholder="Search"
        onChangeText={handleFilter}
        value={searchQuery}
      />
      <EditPiezaModal visible={visible} setVisible={setVisible} pieza={pieza} />
      <ScrollView>
        {piezasFiltered?.map((pieza: Part) => (
          <Pressable
            key={pieza.id}
            onPress={() => {
              handlePiezaPress(pieza)
            }}
          >
            <PiezaCard pieza={pieza} />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
