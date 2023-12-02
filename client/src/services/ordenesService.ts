import axios from "axios";
import { Orden } from "../types/orden";
const url: string = "http://localhost:3001/api/ordenes";

let token:any= null;

const setToken = (newToken:String) => {
  token = `Bearer ${newToken}`;
};

const getItems = async () => {
  const request = await axios.get(url);
  return request;
};
type newOrden = Omit<Orden, 'dias' | 'id'>;
const createItem = async (orden:newOrden) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = await axios.post(url, orden, config);
  return request.data;
};
const removeItem = async (items: Orden[]) => {
  const config = {
    headers: { Authorization: token },
  };
  const deleteRequests = items.map(async item => {
    const response = await axios.delete(`${url}/${item.id}`, config);
    return response;
  });
  return Promise.all(deleteRequests);
};

export default { getItems, createItem,name:"Orden", removeItem,setToken };
