import axios from 'axios';

/**
 * https://agile-thicket-66683.herokuapp.com/observatorio/api/porcentagem_casos_por_uf/2020/
 */

const api = axios.create({
  baseURL: 'https://agile-thicket-66683.herokuapp.com/api',
});

export default api;
