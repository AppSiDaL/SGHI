import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import React, { useState } from 'react'

interface EditDialogProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
  setProductDialog: React.Dispatch<React.SetStateAction<boolean>>
  productDialog: boolean
  submitted: boolean
}

export default function BulkCreatePiezas ({
  setSubmitted,
  setProductDialog,
  productDialog,
  submitted
}: EditDialogProps) {
  const [orden, setOrden] = useState<number>(0)
  const [codigo, setCodigo] = useState<string>('')
  const hideDialog = () => {
    setSubmitted(false)
    setProductDialog(false)
  }

  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
    </React.Fragment>
  )

  return (
    <Dialog
      visible={productDialog}
      style={{ width: '32rem' }}
      breakpoints={{ '960px': '75vw', '641px': '90vw' }}
      header="Pieza"
      modal
      className="p-fluid"
      footer={productDialogFooter}
      onHide={hideDialog}
    >
      <div className="formgrid grid">
        <div className="field col">
          <label htmlFor="orden" className="font-bold">
            Orden
          </label>
          <InputNumber
            id="orden"
            value={orden}
            onChange={(e) => { setOrden(e.value ?? 0) }}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !orden
            })}
          />
          {submitted && !orden && (
            <small className="p-error">Orden requerida.</small>
          )}
        </div>
        <div className="field col">
          <label htmlFor="codigo" className="font-bold">
            Codigo
          </label>
          <InputText
            id="codigo"
            value={codigo}
            onChange={(e) => { setCodigo(e.target.value) }}
            required
            autoFocus
            className={classNames({
              'p-invalid': submitted && !codigo
            })}
          />
          {submitted && !codigo && (
            <small className="p-error">Codigo requerido.</small>
          )}
        </div>
      </div>

    </Dialog>
  )
}
