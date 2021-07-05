import axios from 'axios';
const api = axios.create({
  baseURL: 'https://agile-thicket-66683.herokuapp.com/api',
});
export default api;
