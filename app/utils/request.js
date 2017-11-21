var axios = require('axios'),
    source = axios.CancelToken.source();

var ajax = axios.create({
    timeout: 3000,
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

module.exports = ajax;