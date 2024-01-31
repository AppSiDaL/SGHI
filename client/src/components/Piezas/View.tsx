import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import piezasService from "../../services/piezasService";
import { PartDraw } from "../../types/piezas";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
export default function View() {
  const [isEditing, setIsEditing] = useState(false);
  const [orden, setOrden] = useState<string>();
  const [codigo, setCodigo] = useState<string>();
  const [numeroPieza, setNumeroPieza] = useState<string>();
  const [descripcion, setDescripcion] = useState<string>();
  const [cantidad, setCantidad] = useState<number>();
  const [estado, setEstado] = useState<string>();
  const [area, setArea] = useState<string>();
  const [fechaEntrada, setFechaEntrada] = useState<string>();
  const [fechaSalida, setFechaSalida] = useState<string>();
  const [observaciones, setObservaciones] = useState<string>();

  const { id } = useParams<{ id: string }>();
  const [pieza, setPieza] = useState<PartDraw>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (id) {
      piezasService
        .getItem(id)
        .then((response) => {
          setPieza(response.data);
          setOrden(String(response.data.orden));
          setCodigo(response.data.codigo);
          setNumeroPieza(String(response.data.numero_pieza));
          setDescripcion(response.data.descripcion);
          setCantidad(response.data.cantidad);
          setEstado(response.data.estado);
          setArea(response.data.area);
          setFechaEntrada(response.data.fecha_entrada);
          setFechaSalida(response.data.fecha_salida);
          setObservaciones(response.data.observaciones);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, [
  ]);
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

  const propiedades = [
    "orden",
    "codigo",
    "numero_pieza",
    "descripcion",
    "cantidad",
    "estado",
    "area",
    "fecha_entrada",
    "fecha_salida",
    "dias",
    "observaciones",
  ];
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
  const estados: any = ["procesando", "ajustando", "terminado"];
  const save=async()=>{
    const newPieza = {
      orden:orden??'',
      codigo:codigo??'',
      numero_pieza: numeroPieza??'',
      descripcion:descripcion??'',
      cantidad: cantidad??0,
      estado:estado??'',
      area:area??'',
      fecha_entrada: fechaEntrada??'',
      fecha_salida: fechaSalida??'',
      observaciones:observaciones??''
    };
    await piezasService.updateItem(id ?? '',newPieza);
    setIsEditing(false)
  }
  return (
    <Card
      title={
        isEditing ? (
          <div className="flex gap-1">
            <p
              style={{ width: "50%", textTransform: "capitalize", margin: 10 }}
            >
              {pieza?.descripcion}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button label="Guardar" icon="pi pi-check" onClick={save}severity="success" />
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
            <p
              style={{ width: "50%", textTransform: "capitalize", margin: 10 }}
            >
              {pieza?.descripcion}
            </p>
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
                <InputText
                  type="text"
                  value={orden}
                  onChange={(e) => setOrden(String(e.target.value))}
                />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Codigo:{" "}
                </label>
                <InputText
                  type="text"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Numero de Pieza:{" "}
                </label>
                <InputText
                  value={String(numeroPieza)}
                  type="text"
                  onChange={(e) => setNumeroPieza(e.target.value)}
                />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Descripcion:{" "}
                </label>
                <InputText
                  value={descripcion}
                  type="text"
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Cantidad:{" "}
                </label>
                <InputNumber
                  value={cantidad}
                  type="text"
                  onChange={(e) => setCantidad(Number(e.value))}
                />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Estado:{" "}
                </label>
                <Dropdown
                  value={estado}
                  onChange={(e: DropdownChangeEvent) => setEstado(e.value)}
                  options={estados}
                />
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
                  value={fechaEntrada}
                  onChange={(e) => setFechaEntrada(e.target.value)}
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
                  onChange={(e) => setFechaSalida(e.target.value)}
                  value={fechaSalida}
                />
              </span>
              <br />
              <span>
                <label style={{ display: "inline-block", width: widthLabel }}>
                  Observaciones:{" "}
                </label>
                <InputText
                  type="text"
                  value={observaciones??""}
                  onChange={(e) => setObservaciones(e.target.value)}
                />
              </span>
              <br />
            </>
          ) : (
            <>
              {propiedades.map((property) => (
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    margin: 5,
                    textTransform: "capitalize",
                  }}
                  key={property}
                >
                  {property}:{" "}
                  <span style={{ fontWeight: "normal" }}>
                    {String(pieza?.[property as keyof PartDraw])}
                  </span>
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
