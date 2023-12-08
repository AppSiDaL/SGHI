import axios from "axios";
import { Herramienta } from "../types/herramientas";
import { url as baseURL } from "../utils";
const url = baseURL + "/herramientas";

let token: any = null;

const setToken = (newToken: String) => {
  token = `Bearer ${newToken}`;
};

const getItems = async () => {
  const request = await axios.get(url);
  return request;
};
type newHerramienta = Omit<Herramienta, "fecha_modificacion" | "id">;

const createItem = async (pieza: newHerramienta) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = await axios.post(url, pieza, config);
  return request.data;
};
const removeItem = async (items: Herramienta[]) => {
  const config = {
    headers: { Authorization: token },
  };
  const deleteRequests = items.map(async (item) => {
    const response = await axios.delete(`${url}/${item.id}`, config);
    console.log(response);
    return response;
  });
  return Promise.all(deleteRequests);
};

export default {
  getItems,
  name: "Herramienta",
  createItem,
  removeItem,
  setToken,
};
