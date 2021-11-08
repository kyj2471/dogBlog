import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thedogapi.com/v1',
  headers: { 'x-api-key': '9a0b0a30-b146-436c-80fc-0aed0f0ad9c3' }
});

export default instance;
