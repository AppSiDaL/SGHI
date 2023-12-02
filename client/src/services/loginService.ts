import axios from "axios";
import { credentials } from "../types/user";
const url: string = "http://localhost:3001/api/login";

const loginUser = async (credentials: credentials) => {
  const request = await axios.post(url, credentials);
  return request.data;
};

export default { loginUser };
