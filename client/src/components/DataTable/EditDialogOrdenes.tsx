import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import ordenesService from "../../services/ordenesService";

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
  const [r3, setR3] = useState<number>(0);
  const [departamento, setDepartamento] = useState<string>("");
  const [codigo, setCodigo] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [avance, setAvance] = useState<number>(0);
  const [cotizado, setCotizado] = useState<number>(0);
  const [costoMaterial, setCostoMaterial] = useState<number>(0);
  const [manoObra, setManoObra] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [solicitud, setSolicitud] = useState<string>("");
  const [autorizacion, setAutorizacion] = useState<string>("");
  const [salida, setSalida] = useState<string>("");
  const [prioridad, setPrioridad] = useState<number>(0);

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };
  const saveOrden= async () => {
    const newOrden = {
      orden,
      r3,
      departamento,
      codigo,
      estado,
      avance,
      cotizado,
      material: costoMaterial,
      manoObra: manoObra,
      total,
      fecha_solicitud: solicitud,
      fecha_autorizacion: autorizacion,
      fecha_salida: salida,
      prioridad,
    };
    const response = await ordenesService.createItem(newOrden);
    console.log(response);
    setSubmitted(true);
  }

  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveOrden} />
    </React.Fragment>
  );

  const estados: any = ["procesando","ajustando","terminado"];

  return (
    <Dialog
      visible={productDialog}
      style={{ width: "32rem" }}
      breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      header="Orden"
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
          <InputNumber
            id="codigo"
            value={r3}
            onChange={(e) => setR3(e.value ?? 0)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !r3,
            })}
          />
          {submitted && !r3 && <small className="p-error">r3 requerido.</small>}
        </div>
      </div>

      <div className="flex">
        <div className="field">
          <label htmlFor="#" className="font-bold">
            Departamento
          </label>
          <InputText
            id="#"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !departamento,
            })}
          />
          {submitted && !departamento && (
            <small className="p-error">numero_pieza requerido.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="cantidad" className="font-bold">
            Codigo
          </label>
          <InputText
            id="cantidad"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !codigo,
            })}
          />
          {submitted && !codigo && (
            <small className="p-error">Codigo requerida.</small>
          )}
        </div>
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
            Avance
          </label>
          <InputNumber
            id="cantidad"
            value={avance}
            onChange={(e) => setAvance(e.value ?? 0)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !avance,
            })}
          />
        </div>
      </div>

      <div className="formgrid grid">
        <div className="field col">
          <label htmlFor="price" className="font-bold">
            Cotizado
          </label>
          <InputNumber
            id="cantidad"
            value={cotizado}
            onChange={(e) => setCotizado(e.value ?? 0)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !cotizado,
            })}
          />
        </div>
        <div className="field col">
          <label htmlFor="quantity" className="font-bold">
            Costo Material
          </label>
          <InputNumber
            id="cantidad"
            value={costoMaterial}
            onChange={(e) => setCostoMaterial(e.value ?? 0)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !costoMaterial,
            })}
          />
        </div>
      </div>

      <div className="formgrid grid">
        <div className="field col">
          <label htmlFor="price" className="font-bold">
            Costo Mano Obra
          </label>
          <InputNumber
            id="cantidad"
            value={manoObra}
            onChange={(e) => setManoObra(e.value ?? 0)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !manoObra,
            })}
          />
        </div>
        <div className="field col">
          <label htmlFor="quantity" className="font-bold">
            Costo Total Actual
          </label>
          <InputNumber
            id="cantidad"
            value={total}
            onChange={(e) => setTotal(e.value ?? 0)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !total,
            })}
          />
        </div>
      </div>

      <div className="formgrid grid">
        <div className="field col">
          <label htmlFor="price" className="font-bold">
            Fecha Solicitud
          </label>
          <InputText
            type="date"
            className="text-green-400 p-inputtext-sm"
            value={solicitud}
            onChange={(e) => setSolicitud(e.target.value)}
          />
        </div>
        <div className="field col">
          <label htmlFor="quantity" className="font-bold">
            Fecha Autorizacion
          </label>
          <InputText
            type="date"
            className="text-red-400 p-inputtext-sm"
            value={autorizacion}
            onChange={(e) => setAutorizacion(e.target.value)}
          />
        </div>
      </div>

      <div className="formgrid grid">
        <div className="field col">
          <label htmlFor="price" className="font-bold">
            Fecha Estimada Salida
          </label>
          <InputText
            type="date"
            className="text-green-400 p-inputtext-sm"
            value={salida}
            onChange={(e) => setSalida(e.target.value)}
          />
        </div>
        <div className="field col">
          <label htmlFor="quantity" className="font-bold">
            Prioridad
          </label>
          <InputNumber
            value={prioridad}
            onValueChange={(e: InputNumberValueChangeEvent) =>
              setPrioridad(e.value ?? 0)
            }
            showButtons
            buttonLayout="horizontal"
            step={1}
            decrementButtonClassName="p-button-danger"
            incrementButtonClassName="p-button-success"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
      </div>
    </Dialog>
  );
}
