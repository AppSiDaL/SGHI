import axios from "axios";
import { Movimiento } from "../types/movimientos";
const url: string = "http://localhost:3001/api/movimientos";

const getItems = async () => {
  const request = await axios.get(url);
  return request;
};
const createItem = async (pieza: Movimiento) => {
  const config = {
    headers: { Authorization: "" },
  };
  const request = await axios.post(url, pieza, config);
  return request.data;
};
const removeItem = async (id: string) => {
  const request = await axios.delete(`${url}/${id}`);
  return request;
};

export default { getItems, name:"Movimiento",createItem, removeItem };
