/**
 * 对象转查询字符串
 * @param {Object} obj 
 * return querystring
 */
function obj2querystring(obj) {
    var qs = [];
    for (var key in obj) {
        qs.push(`${key}=${obj[key] || ''}`);
    }
    return qs.join('&');
}


export { obj2querystring };
export { default as network } from './network';
export { setToken, getToken, removeToken, setItem, getItem, removeItem, prefix } from './storage';