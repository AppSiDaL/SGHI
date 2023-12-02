import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import React, { useState } from "react";
import { FileUpload } from "primereact/fileupload";
import herramientasService from "../../services/herramientasService";

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
  const [numeroPieza, setNumeroPieza] = useState<string>("");
  const [codigo, setCodigo] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [response, setResponse] = useState<object>({});

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };
  const saveHerramienta = () => {
    const data = {
      pieza: numeroPieza,
      codigo: codigo,
      descripcion: descripcion,
      dibujo: (response as any).url_preview,
    };
    herramientasService.createItem(data);
    console.log(response);
  };
  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveHerramienta} />
    </React.Fragment>
  );
  const urlDisplay = response ? (
    <p className="text-green-500">{(response as any).message}</p>
  ) : null;
  return (
    <Dialog
      visible={productDialog}
      style={{ width: "32rem" }}
      breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      header="Herramienta"
      modal
      className="p-fluid"
      footer={productDialogFooter}
      onHide={hideDialog}
    >
      <div className="flex">
        <div className="field">
          <label htmlFor="orden" className="font-bold">
            Codigo
          </label>
          <InputText
            id="orden"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !codigo,
            })}
          />
          {submitted && !codigo && (
            <small className="p-error">NumeroPieza requerida.</small>
          )}
        </div>
        <div className="field">
          <label htmlFor="codigo" className="font-bold">
            # Pieza
          </label>
          <InputText
            id="codigo"
            value={numeroPieza}
            onChange={(e) => setNumeroPieza(e.target.value)}
            required
            autoFocus
            className={classNames({
              "p-invalid": submitted && !numeroPieza,
            })}
          />
          {submitted && !numeroPieza && (
            <small className="p-error">Codigo requerido.</small>
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
      <div className="field">
        <label htmlFor="descripcion" className="font-bold">
          Dibujo PDF
        </label>
        <FileUpload
          name="file"
          url={"http://localhost:3001/api/herramientas/upload"}
          multiple
          accept="pdf/*"
          maxFileSize={1000000}
          onUpload={(e) => {
            const response = JSON.parse(e.xhr.response);
            setResponse(response.response);
          }}
          cancelLabel="Cancelar"
          uploadLabel="Subir"
          chooseLabel="Seleccionar"
          emptyTemplate={
            <>
              <p className="m-0">Puedes arrastrar el archivo aqui.</p>
              {urlDisplay}
            </>
          }
        />
      </div>
    </Dialog>
  );
}
