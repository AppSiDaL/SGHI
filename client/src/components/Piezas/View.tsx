import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import piezasService from "../../services/piezasService";
import { PartDraw } from "../../types/piezas";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";
export default function View() {
  const [isEditing, setIsEditing] = useState(false);

  const { id } = useParams<{ id: string }>();
  const [pieza, setPieza] = useState<PartDraw>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (id) {
      piezasService
        .getItem(id)
        .then((response) => {
          setPieza(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, []);
  const widthLabel = "150px";
  if (isLoading) {
    return (
      <>
        <Skeleton className="mb-2"></Skeleton>
        <Skeleton width="10rem" className="mb-2"></Skeleton>
        <Skeleton width="5rem" className="mb-2"></Skeleton>
        <Skeleton height="2rem" className="mb-2"></Skeleton>
        <Skeleton width="10rem" height="4rem"></Skeleton>
      </>
    );
  }
  return (
    <Card
      title={
        isEditing ? (
          <div className="flex gap-1">
            <InputText
              style={{ width: "50%" }}
              defaultValue={pieza?.descripcion}
            />
            <div className="flex flex-wrap gap-2">
              <Button label="Guardar" icon="pi pi-check" severity="success" />
              <Button
                label="Descartar"
                icon="pi pi-times"
                onClick={() => setIsEditing(false)}
                severity="danger"
              />
            </div>
          </div>
        ) : (
          <div className="flex">
            <p style={{ width: "50%" }}>{pieza?.descripcion}</p>
            <div className="flex flex-wrap gap-2">
              <Button
                style={{ height: "50%", alignSelf: "center" }}
                label="Editar"
                onClick={() => setIsEditing(true)}
                icon="pi pi-pencil"
                severity="info"
              />
            </div>
          </div>
        )
      }
    >
      <div className="grid">
        <div className="col">
          {isEditing ? (
            <>
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Orden:{" "}
                </label>
                <InputText defaultValue={pieza?.orden} />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Codigo:{" "}
                </label>
                <InputText defaultValue={pieza?.codigo} />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Numero de Pieza:{" "}
                </label>
                <InputText defaultValue={pieza?.numero_pieza} />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Descripcion:{" "}
                </label>
                <InputText defaultValue={pieza?.descripcion} />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Cantidad:{" "}
                </label>
                <InputText defaultValue={pieza?.cantidad} />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Estado:{" "}
                </label>
                <InputText defaultValue={pieza?.estado} />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Area:{" "}
                </label>
                <InputText defaultValue={pieza?.area} />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Fecha de Entrada:{" "}
                </label>
                <InputText
                  style={{ width: "216px" }}
                  type="date"
                  defaultValue={pieza?.fecha_entrada}
                />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Fecha de Salida:{" "}
                </label>
                <InputText
                  style={{ width: "216px" }}
                  type="date"
                  defaultValue={pieza?.fecha_salida}
                />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Observaciones:{" "}
                </label>
                <InputText defaultValue={pieza?.observaciones} />
              </span>
              <br />
            </>
          ) : (
            <>
              <p>Orden: {pieza?.orden}</p>
              <p>Código: {pieza?.codigo}</p>
              <p>Número de pieza: {pieza?.numero_pieza}</p>
              <p>Descripción: {pieza?.descripcion}</p>
              <p>Cantidad: {pieza?.cantidad}</p>
              <p>Estado: {pieza?.estado}</p>
              <p>Área: {pieza?.area}</p>
              <p>Fecha de entrada: {pieza?.fecha_entrada}</p>
              <p>Fecha de salida: {pieza?.fecha_salida}</p>
              <p>Dias restantes: {pieza?.dias}</p>
              <p>Observaciones: {pieza?.observaciones}</p>
            </>
          )}
        </div>
        <div className="col">
          <object
            style={{ width: "100%", height: "100%" }}
            data={pieza?.herramienta.dibujo}
            type="application/pdf"
          ></object>
        </div>
      </div>
    </Card>
  );
}
