import axios from 'axios';

const spacexURL = 'http://api.spacexdata.com/v3';
export const missionsHttp = axios.create({
  baseURL: `${spacexURL}/missions`,
  headers: {
    'Content-type': 'application/json',
  },
});

export const rocketsHttp = axios.create({
  baseURL: `${spacexURL}/rockets`,
  headers: {
    'Content-type': 'application/json',
  },
});
