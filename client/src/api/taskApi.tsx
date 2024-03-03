import { BASE_URL } from '../constants/urlConstants';
import axios from 'axios';
import { Task, TaskPayload } from '../types/Task';

const getTasksApi = axios.create({
  baseURL: BASE_URL
});

export const getById = async () => {
  return await axios.post(`${BASE_URL}/task`);
};

export const getTasks = async () => {
  return await getTasksApi.get('/tasks/userId');
};

export const createTask = async (taskPayload: TaskPayload) => {
  return await getTasksApi.post('tasks', taskPayload);
};

export const updateTask = async (id: number) => {
  return await axios.post(`${BASE_URL}/update/${id}`);
};

getTasksApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
