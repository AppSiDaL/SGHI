import axios from 'axios'
import { type Part } from '../types/piezas'
import { url as baseURL } from '../utils'
const url = baseURL + '/piezas'

let token: any = null

const setToken = (newToken: string): void => {
  token = `Bearer ${newToken}`
}

const getItems = async (): Promise<any> => {
  const request = await axios.get(url)
  return request
}

const getItem = async (id: string): Promise<any> => {
  const request = await axios.get(`${url}/${id}`)
  return request
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
const updateItem = async (id: string, pieza: newPart): Promise<any> => {
  const config = {
    headers: { Authorization: token }
  }
  const request = await axios.put(`${url}/${id}`, pieza, config)
  return request.data
}

export default {
  getItems,
  setToken,
  name: 'Pieza',
  createItem,
  removeItem,
  updateItem,
  getItem
}
