import axios from 'axios'
import { type Herramienta } from '../types/herramientas'
import { url as baseURL } from '../utils'
const url = baseURL + '/herramientas'

let token: string | null = null

const setToken = (newToken: string): void => {
  token = `Bearer ${newToken}`
}

const getItems = async (): Promise<any> => {
  const request = await axios.get(url)
  return request
}
type newHerramienta = Omit<Herramienta, 'fecha_modificacion' | 'id'>

const createItem = async (pieza: newHerramienta): Promise<any> => {
  const config = {
    headers: { Authorization: token }
  }
  const request = await axios.post(url, pieza, config)
  return request.data
}
const removeItem = async (items: Herramienta[]): Promise<any> => {
  const config = {
    headers: { Authorization: token }
  }
  const deleteRequests = items.map(async (item) => {
    const response = await axios.delete(`${url}/${item.id}`, config)
    console.log(response)
    return response
  })
  return await Promise.all(deleteRequests)
}

export default {
  getItems,
  name: 'Herramienta',
  createItem,
  removeItem,
  setToken
}
