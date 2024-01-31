import axios from 'axios'
import { type Part } from '../types/piezas'
const url: string = 'https://sghi.up.railway.app/api/piezas'

let token: any = null

const setToken = (newToken: string): void => {
  token = `Bearer ${newToken}`
}

const getItems = async (): Promise<any> => {
  const request = await axios.get(url)
  return request
}

const changePart = async (id: number | undefined, modifiedPart: any): Promise<any> => {
  const request = await axios.put(`${url}/${id}`, modifiedPart)
  return request.data
}

type newPart = Omit<Part, 'dias' | 'id'>
const createItem = async (pieza: newPart): Promise<any> => {
  const config = {
    headers: { Authorization: token }
  }
  const request = await axios.post(url, pieza, config)
  return request.data
}

const removeItem = async (items: Part[]): Promise<any> => {
  const config = {
    headers: { Authorization: token }
  }
  const deleteRequests = items.map(async (item) => {
    const response = await axios.delete(`${url}/${item.id}`, config)
    return response
  })
  return await Promise.all(deleteRequests)
}

export default {
  getItems,
  setToken,
  name: 'Pieza',
  createItem,
  removeItem,
  changePart
}
