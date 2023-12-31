import axios from "axios";
import { Part } from "../types/piezas";
const url: string = "https://sgh-iusa.onrender.com/api/piezas";

let token: any = null;

const setToken = (newToken: String) => {
  token = `Bearer ${newToken}`;
};

const getItems = async () => {
  const request = await axios.get(url);
  return request;
};

const changePart = async (id: number | undefined, modifiedPart: any) => {
  const request = await axios.put(`${url}/${id}`, modifiedPart);
  return request.data;
};

type newPart = Omit<Part, "dias" | "id">;
const createItem = async (pieza: newPart) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = await axios.post(url, pieza, config);
  return request.data;
};

const removeItem = async (items: Part[]) => {
  const config = {
    headers: { Authorization: token },
  };
  const deleteRequests = items.map(async (item) => {
    const response = await axios.delete(`${url}/${item.id}`, config);
    return response;
  });
  return Promise.all(deleteRequests);
};

export default {
  getItems,
  setToken,
  name: "Pieza",
  createItem,
  removeItem,
  changePart,
};
