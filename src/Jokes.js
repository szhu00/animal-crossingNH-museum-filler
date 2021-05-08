import axios from 'axios';


 export const jokes = axios.create({
    baseURL: 'https://official-joke-api.appspot.com/',
});


