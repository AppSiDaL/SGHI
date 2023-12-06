import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import piezasService from "../../services/piezasService";
import { Part } from "../../types/piezas";
import { Card } from "primereact/card";

export default function View() {
  const { id } = useParams<{ id: string }>();
  const [pieza, setPieza] = useState<Part>();
  useEffect(() => {
    if (id) {
      piezasService
        .getItem(id)
        .then((response) => {
          setPieza(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <Card title={pieza?.descripcion}>
      <div className="grid">
        <div className="col">
          <p>Orden: {pieza?.orden}</p>
          <p>Código: {pieza?.codigo}</p>
          <p>Número de pieza: {pieza?.numero_pieza}</p>
          <p>Descripción: {pieza?.descripcion}</p>
          <p>Cantidad: {pieza?.cantidad}</p>
          <p>Estado: {pieza?.estado}</p>
          <p>Área: {pieza?.area}</p>
          <p>Fecha de entrada: {pieza?.fecha_entrada}</p>
          <p>Fecha de salida: {pieza?.fecha_salida}</p>
          <p>Fecha de salida: {pieza?.fecha_salida}</p>
          <p>Dias restantes: {pieza?.dias}</p>
          <p>Observaciones: {pieza?.observaciones}</p>
        </div>
        <div className="col">
          <object
            style={{ width: "100%", height: "100%" }}
            type="application/pdf"
          ></object>
        </div>
      </div>
    </Card>
  );
}
