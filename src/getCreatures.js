import axios from 'axios';


 export const Api = axios.create({
    baseURL: 'https://acnhapi.com/v1a/',
});

