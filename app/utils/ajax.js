import axios from 'axios';

const source = axios.CancelToken.source();
const ajax = axios.create({
    timeout: 30000,
    cancelToken: source.token
});

ajax.interceptors.response.use(function (res) {
    return res;
}, function (err) {
    console.log('HTTP Status Code:', err.response ? err.response.status : err.message);
});

ajax.cancel = source.cancel;
ajax.spread = axios.spread;
ajax.all = axios.all;

export default ajax;