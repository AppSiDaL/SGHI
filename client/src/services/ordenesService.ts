import axios from 'axios'
import { type Orden } from '../types/orden'
import { url as baseURL } from '../utils'
const url = baseURL + '/ordenes'

let token: any = null

const setToken = async (newToken: string): Promise<any> => {
  token = `Bearer ${newToken}`
}

const getItems = async (): Promise<any> => {
  const request = await axios.get(url)
  return request
}
type newOrden = Omit<Orden, 'dias' | 'id'>
const createItem = async (orden: newOrden): Promise<any> => {
  const config = {
    headers: { Authorization: token }
  }
  const request = await axios.post(url, orden, config)
  return request.data
}
const removeItem = async (items: Orden[]): Promise<any> => {
  const config = {
    headers: { Authorization: token }
  }
  const deleteRequests = items.map(async item => {
    const response = await axios.delete(`${url}/${item.id}`, config)
    return response
  })
  return await Promise.all(deleteRequests)
}

export default { getItems, createItem, name: 'Orden', removeItem, setToken }
