import React, { useEffect, useState } from 'react'
import DataTableComponent from '../../components/DataTable'
import herramientasService from '../../services/herramientasService'
import { type Herramienta } from '../../types/herramientas'
import { type ColumnProps } from '../../types/column'
import { Button } from 'primereact/button'
import { type Part } from '../../types/piezas'
import { type Orden } from '../../types/orden'
import { type Movimiento } from '../../types/movimientos'
const emptyItem: Herramienta = {
  id: 0,
  codigo: '',
  numero_pieza: '',
  descripcion: '',
  fecha_modificacion: '',
  dibujo: ''
}
export default function page (): JSX.Element {
  const [items, setItems] = useState<Herramienta[]>([])
  const [visiblePDF, setVisiblePDF] = useState(false)
  const [item, setItem] = useState<Herramienta | Part>(emptyItem)
  useEffect(() => {
    herramientasService
      .getItems()
      .then((data: any) => {
        setItems(data.data as Herramienta[])
      })
      .catch((err) => { console.log(err) })
  }, [])
  const columns: ColumnProps[] = [
    {
      field: 'id',
      header: 'ID',
      body: undefined
    },
    {
      field: 'codigo',
      header: 'Codigo',
      body: undefined
    },
    {
      field: 'numero_pieza',
      header: '#',
      body: undefined
    },
    {
      field: 'descripcion',
      header: 'Descripcion',
      body: undefined
    },
    {
      field: 'fecha_modificacion',
      header: 'Mod.',
      body: undefined
    },
    {
      field: 'dibujo',
      header: 'Dibujo',
      body: (rowData: Herramienta) => (
        <Button
          label="Ver"
          icon="pi pi-file-pdf"
          className="p-button-danger"
          onClick={() => {
            setVisiblePDF(true)
            setItem(rowData)
          }}
        />
      )
    }
  ]
  return (
    <>
      <DataTableComponent
      emptyItem={emptyItem}
      service={herramientasService}
        items={items}
        setItems={setItems as React.Dispatch<React.SetStateAction<Herramienta[] | Orden[] | Movimiento[] | Part[]>>}
        columns={columns}
        visiblePDF={visiblePDF}
        setVisiblePDF={setVisiblePDF}
        item={item}
        setItem={setItem as React.Dispatch<React.SetStateAction<Herramienta | Part | Orden | Movimiento>>}
      />
    </>
  )
}
