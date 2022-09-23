import axios from 'axios';
import { apiUrl } from '../../constants';

export async function getResources() {
  return (await axios.get(apiUrl)).data;
}
