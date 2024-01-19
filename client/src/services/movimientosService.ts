import axios from 'axios'
import { type Movimiento } from '../types/movimientos'
import { url as baseURL } from '../utils'
const url = baseURL + '/movimientos'
const getItems = async (): Promise<any> => {
  const request = await axios.get(url)
  return request
}
const createItem = async (pieza: Movimiento): Promise<any> => {
  const config = {
    headers: { Authorization: '' }
  }
  const request = await axios.post(url, pieza, config)
  return request.data
}
const removeItem = async (id: string): Promise<any> => {
  const request = await axios.delete(`${url}/${id}`)
  return request
}

export default { getItems, name: 'Movimiento', createItem, removeItem }
