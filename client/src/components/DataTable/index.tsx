import React, { useState, useRef } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Toast } from 'primereact/toast'
import { Button } from 'primereact/button'
import { Toolbar } from 'primereact/toolbar'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Menu } from 'primereact/menu'
import { ProgressBar } from 'primereact/progressbar'
import { type Herramienta } from '../../types/herramientas'
import { type Part } from '../../types/piezas'
import { type ColumnProps } from '../../types/column'
import { type Orden } from '../../types/orden'
import { type MenuItem } from 'primereact/menuitem'
import { SplitButton } from 'primereact/splitbutton'
import { type ServiceProps } from '../../types/service'
import EditDialogPiezas from './NewDialogPiezas'
import EditDialogOrdenes from './NewDialogOrdenes'
import EditDialogHerramientas from './NewDialogHerramientas'
import { useNavigate } from 'react-router-dom'
import { type Movimiento } from '../../types/movimientos'
import BulkCreatePiezas from './BulkCreatePiezas'

interface DataTableComponentProps {
  items: Herramienta[] | Part[] | Orden[] | Movimiento[]
  setItems: React.Dispatch<
  React.SetStateAction<Herramienta[] | Part[] | Orden[] | Movimiento[]>
  >
  columns: ColumnProps[]
  visiblePDF?: boolean
  setVisiblePDF?: React.Dispatch<React.SetStateAction<boolean>>
  item: Herramienta | Part | Orden | Movimiento
  setItem: React.Dispatch<
  React.SetStateAction<Herramienta | Part | Orden | Movimiento>
  >
  service: ServiceProps
  emptyItem: Herramienta | Part | Orden | Movimiento
}
export default function DataTableComponent ({
  items,
  setItems,
  columns,
  visiblePDF,
  setVisiblePDF,
  item,
  service,
  setItem,
  emptyItem
}: DataTableComponentProps): JSX.Element {
  const [productDialog, setProductDialog] = useState<boolean>(false)
  const [bulk, setBulk] = useState<boolean>(false)
  const [deleteProductDialog, setDeleteProductDialog] =
    useState<boolean>(false)
  const [deleteProductsDialog, setDeleteProductsDialog] =
    useState<boolean>(false)
  const [selectedProducts, setSelectedProducts] = useState<any>([])
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [globalFilter, setGlobalFilter] = useState<string>('')
  const toast = useRef<Toast>(null)
  const dt = useRef<DataTable<Herramienta[]>>(null)
  const navigator = useNavigate()

  const openNew = (): void => {
    setItem(emptyItem)
    setSubmitted(false)
    setProductDialog(true)
  }
  const openBulk = (): void => {
    setItem(emptyItem)
    setSubmitted(false)
    setBulk(true)
  }

  const hideDeleteProductDialog = (): void => {
    setDeleteProductDialog(false)
  }

  const hideDeleteProductsDialog = (): void => {
    setDeleteProductsDialog(false)
  }

  const editProduct = (product: Herramienta): void => {
    setItem({ ...product })
    setProductDialog(true)
  }

  const confirmDeleteProduct = (product: Herramienta): void => {
    setItem(product)
    setDeleteProductDialog(true)
  }

  const deleteProduct = async (): Promise<void> => {
    service
      .removeItem([item])
      .then((res) => {
        if (res.error === false) {
          const _products = items?.filter((val) => val.id !== item.id)
          setItems(_products as Herramienta[])
          setDeleteProductDialog(false)
          setItem(emptyItem)
          toast.current?.show({
            severity: 'success',
            summary: 'Operacion Exitosa',
            detail: 'Eliminado',
            life: 3000
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const exportCSV = (): void => {
    dt.current?.exportCSV()
  }

  const confirmDeleteSelected = (): void => {
    setDeleteProductsDialog(true)
  }

  const deleteSelectedProducts = async (): Promise<void> => {
    const response = await service.removeItem(selectedProducts as any[])
    if (response.error === false) {
      const _products = items?.filter(
        (val) => selectedProducts.includes(val) === false
      )
      setItems(_products as Herramienta[])
      setDeleteProductsDialog(false)
      setSelectedProducts([])
      toast.current?.show({
        severity: 'success',
        summary: 'Operaciones Exitosas',
        detail: 'Objetos Eliminados',
        life: 3000
      })
    }
  }

  const leftToolbarTemplate = (): JSX.Element => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="Nuevo"
          icon="pi pi-plus"
          style={{ backgroundColor: '#00C200' }}
          severity="success"
          onClick={openNew}
        />
        <Button
          label="Bulk"
          icon="pi pi-plus"
          style={{ backgroundColor: '#00C200' }}
          severity="success"
          onClick={openBulk}
        />
        <Button
          label="Eliminar"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={selectedProducts?.length === 0}
        />
      </div>
    )
  }

  const rightToolbarTemplate = (): JSX.Element => {
    const items: MenuItem[] = [
      {
        label: 'PDF',
        icon: 'pi pi-file-pdf',
        command: () => {
          const exportColumns = [{ title: 'ads', dataKey: 'ads' }]
          import('jspdf')
            .then((jsPDF) => {
              import('jspdf-autotable')
                .then(() => {
                  // eslint-disable-next-line new-cap
                  const doc = new jsPDF.default('p', 'px', 'a4', true);
                  (doc as any).autoTable(exportColumns, items)
                  doc.save('products.pdf')
                })
                .catch((err) => {
                  console.log(err)
                })
            })
            .catch((err) => {
              console.log(err)
            })
        }
      },
      {
        label: 'CSV',
        icon: 'pi pi-file',
        command: () => {}
      }
    ]
    return (
      <SplitButton
        label="Exportar"
        icon="pi pi-file-excel"
        onClick={exportCSV}
        model={items}
        raised
      />
    )
  }

  const actionBodyTemplate = (rowData: Herramienta): JSX.Element => {
    const menuRight = useRef<any>(null)
    const items = [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          navigator(`${rowData.id}`)
          editProduct(rowData)
        }
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-times',
        command: () => {
          confirmDeleteProduct(rowData)
        }
      }
    ]

    return (
      <React.Fragment>
        <Menu
          model={items}
          popup
          ref={menuRight}
          id="popup_menu_right"
          popupAlignment="right"
        />
        <Button
          label="..."
          size="small"
          className="mr-2"
          onClick={(event) => menuRight.current?.toggle(event)}
          aria-controls="popup_menu_right"
          aria-haspopup
        />
      </React.Fragment>
    )
  }

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          placeholder="Buscar..."
          onInput={(e) => {
            const target = e.target as HTMLInputElement
            setGlobalFilter(target.value)
          }}
        />
      </span>
    </div>
  )

  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={() => {
          void deleteProduct()
        }}
      />
    </React.Fragment>
  )
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={() => {
          void deleteSelectedProducts()
        }}
      />
    </React.Fragment>
  )

  return (
    <div>
      <Toast ref={toast} position="bottom-right" />
      <div className="card">
        <Toolbar
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
          center={header}
        ></Toolbar>

        <DataTable
          stripedRows
          scrollable
          scrollHeight="500px"
          ref={dt}
          value={items}
          selectionMode="multiple"
          selection={selectedProducts}
          onSelectionChange={(e) => {
            if (Array.isArray(e.value)) {
              setSelectedProducts(e.value)
            }
          }}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          globalFilter={globalFilter}
          emptyMessage={
            <ProgressBar mode="indeterminate" style={{ height: '6px' }} />
          }
        >
          <Column selectionMode="multiple" exportable={false}></Column>
          {columns.map((column) => (
            <Column
              key={column.field}
              field={column.field}
              header={column.header}
              body={column.body}
              sortable
            ></Column>
          ))}
          <Column
            body={actionBodyTemplate}
            exportable={false}
            style={{}}
          ></Column>
        </DataTable>
      </div>
      {(() => {
        switch (service.name) {
          case 'Pieza':
            return (
              <>
                <EditDialogPiezas
                  setSubmitted={setSubmitted}
                  setProductDialog={setProductDialog}
                  productDialog={productDialog}
                  submitted={submitted}
                />
                <BulkCreatePiezas
                  setSubmitted={setSubmitted}
                  setProductDialog={setBulk}
                  productDialog={bulk}
                  submitted={submitted}
                />
              </>
            )
          case 'Orden':
            return (
              <EditDialogOrdenes
                setSubmitted={setSubmitted}
                setProductDialog={setProductDialog}
                productDialog={productDialog}
                submitted={submitted}
              />
            )
          case 'Herramienta':
            return (
              <EditDialogHerramientas
                setSubmitted={setSubmitted}
                setProductDialog={setProductDialog}
                productDialog={productDialog}
                submitted={submitted}
                toast={toast}
              />
            )
          default:
            return null
        }
      })()}

      <Dialog
        header={(item as Herramienta)?.descripcion}
        visible={visiblePDF}
        maximizable
        style={{ width: '70vw', height: '50vw' }}
        onHide={() => setVisiblePDF?.(false)}
      >
        <object
          style={{ width: '100%', height: '100%' }}
          data={(item as Herramienta)?.dibujo}
          type="application/pdf"
        ></object>
      </Dialog>

      <Dialog
        visible={deleteProductDialog}
        style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header="Confirm"
        modal
        footer={deleteProductDialogFooter}
        onHide={hideDeleteProductDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: '2rem' }}
          />
          <span>
            Estas seguro que quieres eliminar{' '}
            <b>{(item as Herramienta).descripcion}</b>?
          </span>
        </div>
      </Dialog>

      <Dialog
        visible={deleteProductsDialog}
        style={{ width: '32rem' }}
        breakpoints={{ '960px': '75vw', '641px': '90vw' }}
        header="Confirm"
        modal
        footer={deleteProductsDialogFooter}
        onHide={hideDeleteProductsDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle mr-3"
            style={{ fontSize: '2rem' }}
          />
          <span>{`Estas seguro que quieres eliminar los ${typeof item} seleccionados?`}</span>
        </div>
      </Dialog>
    </div>
  )
}
