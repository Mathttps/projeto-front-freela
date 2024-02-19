import axios from "axios";

export const createUser = (body) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body)
    .then(res => res.data)
    .catch(error => error.response.data);
};

export const login = (body) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, body)
    .then(res => res.data)
    .catch(error => error.response.data);
};

export const categories = () => {
  return axios.get(`${import.meta.env.VITE_API_URL}/products/categories`)
    .then(res => res.data)
    .catch(error => error.response.data);
};

export const createProduct = (token, body) => {
  const config = { headers: { Authorization: token } };
  return axios.post(`${import.meta.env.VITE_API_URL}/products/new`, body, config)
    .then(res => res.data)
    .catch(error => error.response.data);
};
