import axios from "axios";

const url = "http://localhost:3002/users";

export const getUsers = async () => {
  return await axios.get(url);
};
