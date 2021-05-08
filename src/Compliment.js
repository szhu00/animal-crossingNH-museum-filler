import axios from 'axios';


 export const Compliment = axios.create({
    baseURL: 'https://complimentr.com/',
});
