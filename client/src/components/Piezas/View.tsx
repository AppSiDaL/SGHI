import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import piezasService from "../../services/piezasService";
import { PartDraw } from "../../types/piezas";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
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
  const propiedades = ['orden', 'codigo', 'numero_pieza', 'descripcion', 'cantidad', 'estado', 'area', 'fecha_entrada', 'fecha_salida', 'dias', 'observaciones'];
  const areas: any = [
    "corte",
    "tornos",
    "fresas",
    "temple",
    "rectificado plano",
    "rectificado cilindrico",
    "rectificado vertical",
    "fresas cnc",
    "tornos cnc",
    "edm hilo",
    "edm penetracion",
    "ajuste moldes",
    "ajuste troqueles",
    "calidad",
  ];
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
            <p style={{ width: "50%",textTransform:"capitalize" }}>{pieza?.descripcion}</p>
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
                <Dropdown
            value={area}
            onChange={(e: DropdownChangeEvent) => setArea(e.value)}
            options={areas}
            placeholder="Area..."
          />
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
            {propiedades.map(property => (
              <p style={{fontWeight:"bold", fontSize:25,margin:5,textTransform:"capitalize"}} key={property}>
                {property}: <span style={{fontWeight:"normal"}}>{String(pieza?.[property as keyof PartDraw])}</span>
              </p>
            ))}
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
