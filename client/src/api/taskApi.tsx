import { BASE_URL } from '@/constants/urlConstants';
import { TaskPayload } from '@/types';
import axios from 'axios';

export const getById = async (user: TaskPayload) => {
  return await axios.post(`${BASE_URL}/task`);
};

export const updateTask = async (id: number) => {
  return await axios.post(`${BASE_URL}/update/${id}`);
};
