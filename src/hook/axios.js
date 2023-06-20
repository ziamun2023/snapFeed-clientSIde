import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your desired localhost address
});

export default instance;