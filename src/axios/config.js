import axios from "axios";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const axiosInstance = axios.create({
  baseURL: `https://reactnd-books-api.udacity.com`,
  headers: headers,
});
