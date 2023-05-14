import axios from "axios";

const api = axios.create({
  baseURL: 'https://backend-to-do-app-lemon.vercel.app',
});

export const fetchApiTodos = async () => {
  try {
    const response = await api.get('/todos');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchDetailTodos = async (id) => {
  try {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postApiData = async (data) => {
  try {
    const response = await api.post('/todos', data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const patchApiData = async (id, payload) => {
  try {
    const response = await api.patch(`/todos/${id}`, payload);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteApiData = async (id) => {
  try {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};



export default api;
