import engine from 'store/src/store-engine';
import localStorage from 'store/storages/localStorage';
import cookieStorage from 'store/storages/cookieStorage';

import { prefix } from './index';

let tokenVal;
let tokenKey = `${prefix}token`;
let storage = engine.createStore([localStorage, cookieStorage], []);

function setToken(val) {
    tokenVal = val;
    return storage.set(tokenKey, val);
}

function getToken() {
    return tokenVal || storage.get(tokenKey);
}

function removeToken() {
    tokenVal = void (0);
    return storage.remove(tokenKey);
}

function setItem(key, val) {
    return storage.set(prefix + key, val);
}

function getItem(key) {
    return storage.get(prefix + key);
}

function removeItem(key) {
    return storage.remove(prefix + key);
}

export { storage, setToken, getToken, removeToken, setItem, getItem, removeItem };