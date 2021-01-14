import axios from 'axios';
const token = 'c2e5c76901e50bd1c4d168f592d4ceb9cd972b5a';

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