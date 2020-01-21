import axios from 'axios';
//Change the HMC IP when needed
const instance = axios.create({
    // baseURL: 'https://9.3.147.119:12443/rest/api/'
    baseURL : 'https://9.126.171.97/rest/api/'
    // baseURL : ' https://9.3.147.121/rest/api/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;