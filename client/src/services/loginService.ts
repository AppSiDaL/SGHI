import axios from 'axios'
import { type credentials } from '../types/user'
import { url as baseURL } from '../utils'
const url = baseURL + '/login'
const loginUser = async (credentials: credentials): Promise<any> => {
  const request = await axios.post(url, credentials)
  return request.data
}

export default { loginUser }
