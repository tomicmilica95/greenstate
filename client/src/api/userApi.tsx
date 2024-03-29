import axios from 'axios';
import { BASE_URL } from '../constants/urlConstants';
import { UserPayload } from '../types';

export const signup = async (user: UserPayload) => {
  return await axios.post(`${BASE_URL}/signup`, user);
};

export const login = async (user: UserPayload) => {
  return await axios.post(`${BASE_URL}/auth`, user);
};
