import axios from "axios";
import { credentials } from "../types/user";
import { url as baseURL } from "../utils";
const url = baseURL + "/login";
const loginUser = async (credentials: credentials) => {
  const request = await axios.post(url, credentials);
  return request.data;
};

export default { loginUser };
