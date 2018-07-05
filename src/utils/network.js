import axios from 'axios';
import { getToken } from './storage';

let network = axios.create({
    baseURL: __webpack_public_path__
});

network.interceptors.request.use(function (config) {
    const token = getToken();
    if (token) {
        config.headers.token = token;
    }
    return config;
}, function (err) {
    return Promise.reject(err);
});

network.interceptors.response.use(function (res) {
    return res;
}, function (err) {
    switch (err.response.status) {
        // 未授权/禁止访问
        case 401:
        case 403:
            return Promise.resolve(err.response);
    }
    return Promise.reject(err);
});

network.all = axios.all;
network.spread = axios.spread;

export default network;