import axios from 'axios';
const token = process.env.VUE_APP_GITHUB_KEY;

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