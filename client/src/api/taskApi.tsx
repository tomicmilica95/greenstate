import axios from 'axios';
import { BASE_URL } from '../constants/urlConstants';
import { Task, TaskPayload } from '../types/Task';

const getTasksApi = axios.create({
  baseURL: BASE_URL
});

export const getTasks = async () => {
  return await getTasksApi.get('/tasks/userId');
};

export const createTask = async (taskPayload: TaskPayload) => {
  return await getTasksApi.post('/tasks', taskPayload);
};

export const updateTask = async (task: Task) => {
  const { id, ...payload } = task;
  return await getTasksApi.put(`/update/${id}`, payload);
};

export const deleteTask = async (id: string) => {
  return await getTasksApi.delete(`/delete/${id}`);
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
