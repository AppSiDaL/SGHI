import React, { useEffect } from 'react'
import { TreeSelect, type TreeSelectChangeEvent } from 'primereact/treeselect'
import { type TreeNode } from 'primereact/treenode'
import herramientasService from '../../services/herramientasService'
import { type Herramienta } from '../../types/herramientas'

interface SelectDrawProps {
  selectedDraw: string
  setSelectedDraw: React.Dispatch<React.SetStateAction<string>>
}
export default function SelectDraw ({ selectedDraw, setSelectedDraw }: SelectDrawProps): JSX.Element {
  const [nodes, setNodes] = React.useState<TreeNode[] | null>(null)

  useEffect(() => {
    herramientasService
      .getItems()
      .then((data: any) => {
        const herramientas: Herramienta[] = data.data // Tu array de herramientas

        const dibujosPorCodigo = herramientas.reduce<Record<string, any>>(
          (result, herramienta) => {
            if (!result[herramienta.codigo]) {
              result[herramienta.codigo] = {
                id: herramienta.codigo,
                key: herramienta.codigo,
                label: herramienta.codigo,
                style: { fontWeight: 'bold' },
                hasChildren: true,
                children: []
              }
            }

            result[herramienta.codigo].children.push({
              key: herramienta.id.toString(),
              id: herramienta.id.toString(),
              style: { textTransform: 'capitalize', fontWeight: 'normal' },
              label: herramienta.descripcion + ' - ' + herramienta.numero_pieza,
              hasChildren: false
            })

            return result
          },
          {}
        )

        const resultado = Object.values(dibujosPorCodigo)
        setNodes(resultado as TreeNode[])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className="card flex justify-content-center">
      <TreeSelect
        value={selectedDraw}
        options={nodes ?? []}
        onChange={(e: TreeSelectChangeEvent) => {
          setSelectedDraw(String(e.value) ?? '')
        }}
        className="md:w-20rem w-full"
        placeholder="Select Item"
      ></TreeSelect>
    </div>
  )
}
