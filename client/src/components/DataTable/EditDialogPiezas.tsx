import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import piezasService from "../../services/piezasService";

interface EditDialogProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setProductDialog: React.Dispatch<React.SetStateAction<boolean>>;
  productDialog: boolean;
  submitted: boolean;
}

export default function EditDialogPiezas({
  setSubmitted,
  setProductDialog,
  productDialog,
  submitted,
}: EditDialogProps) {
  const [orden, setOrden] = useState<number>(0);
  const [codigo, setCodigo] = useState<string>("");
  const [numeroPieza, setNumeroPieza] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [cantidad, setCantidad] = useState<number>(0);
  const [estado, setEstado] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [entrada, setEntrada] = useState<string>("");
  const [salida, setSalida] = useState<string>("");
  const [observaciones, setObservaciones] = useState<string>("");

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };
  const savePieza = async () => {
    const newPieza = {
      orden,
      codigo,
      numero_pieza: numeroPieza,
      descripcion,
      cantidad,
      estado,
      area,
      fecha_entrada: entrada,
      fecha_salida: salida,
      observaciones,
    };
    const response = await piezasService.createItem(newPieza);
    console.log(response);
    setSubmitted(true);
  };
  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={savePieza} />
    </React.Fragment>
  );

  const estados: any = ["procesando","ajustando","terminado"];
  const areas:any=["fresas","tornos","soldadura","pintura","almacen","calidad","administracion","gerencia"]
  return (
    <Dialog
      visible={productDialog}
      style={{ width: "32rem" }}
      breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      header="Pieza"
      modal
      className="p-fluid"
      footer={productDialogFooter}
      onHide={hideDialog}
    >
      <div className="flex">
        <div className="field">
          <label htmlFor="orden" className="font-bold">
            Orden
          </label>
          <InputNumber
            id="orden"
            value={orden}
            onChange={(e) => setOrden(e.value ?? 0)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !orden,
            })}
          />
          {submitted && !orden && (
            <small className="p-error">Orden requerida.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="codigo" className="font-bold">
            R-3
          </label>
          <InputText
            id="codigo"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !codigo,
            })}
          />
          {submitted && !codigo && (
            <small className="p-error">Codigo requerido.</small>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="field">
          <label htmlFor="#" className="font-bold">
            Numero Pieza
          </label>
          <InputText
            id="#"
            value={numeroPieza.toString()}
            onChange={(e) => setNumeroPieza(e.target.value)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !numeroPieza,
            })}
          />
          {submitted && !numeroPieza && (
            <small className="p-error">numero_pieza requerido.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="cantidad" className="font-bold">
            Cantidad
          </label>
          <InputNumber
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.value ?? 0)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !cantidad,
            })}
          />
          {submitted && !cantidad && (
            <small className="p-error">Cantidad requerida.</small>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="descripcion" className="font-bold">
          Descripcion
        </label>
        <InputTextarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          rows={2}
          cols={10}
        />
      </div>

      <div className="flex">
        <div className="field">
          <label htmlFor="#" className="font-bold">
            Estado
          </label>
          <Dropdown
            value={estado}
            onChange={(e: DropdownChangeEvent) => setEstado(e.value)}
            options={estados}
            placeholder="Area..."
            className="w-full md:w-14rem"
          />
        </div>
        <div className="field">
          <label htmlFor="cantidad" className="font-bold">
            Area
          </label>
          <Dropdown
            value={area}
            onChange={(e: DropdownChangeEvent) => setArea(e.value)}
            options={areas}
            placeholder="Area..."
            className="w-full md:w-14rem"
          />
        </div>
      </div>

      <div className="formgrid grid">
        <div className="field col">
          <label htmlFor="price" className="font-bold">
            Entrada
          </label>
          <InputText
            type="date"
            className="text-green-400 p-inputtext-sm"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
          />
        </div>
        <div className="field col">
          <label htmlFor="quantity" className="font-bold">
            Salida
          </label>
          <InputText
            type="date"
            className="text-red-400 p-inputtext-sm"
            value={salida}
            onChange={(e) => setSalida(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="descripcion" className="font-bold">
          Observaciones
        </label>
        <InputTextarea
          id="descripcion"
          value={observaciones}
          onChange={(e) => setObservaciones(e.target.value)}
          required
          rows={2}
          cols={10}
        />
      </div>
    </Dialog>
  );
}
