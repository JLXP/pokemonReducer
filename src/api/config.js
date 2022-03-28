import axios from 'axios';

const URL = process.env.POKEAPI || 'https://pokeapi.co/api/v2/'

//Para poder usar axios siempre es indispensable hacer una instancia
const axiosInstance = axios.create({
    baseURL:URL,
});

export default axiosInstance;