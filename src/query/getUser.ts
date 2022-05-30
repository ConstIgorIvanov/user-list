import axios from 'axios';
import { user } from '../types/types';

export async function getUser() {
  try {
    const response = await axios.get<user[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
