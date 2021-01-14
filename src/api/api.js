import axios from 'axios';
const token = '257c2a75052c1a668feaf6c18f6369285af4e851';

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