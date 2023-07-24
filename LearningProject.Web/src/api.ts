import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const getUsers = () => {
  return api.get("/users").then((res) => {
    return res.data;
  });
};
