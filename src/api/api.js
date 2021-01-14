import axios from 'axios';
const token = 'd64c7004cfc17f5154d083b296c10d7f5ab7d962';

const hotelAPI = axios.create({
    baseURL: 'https://api.github.com/',
    headers:{
        'Content-Type':'application/json',
        Accept:'application/vnd.github.v3+json',
        Authorization:`token ${token}`
    },
    timeout:10000
});

export default hotelAPI;