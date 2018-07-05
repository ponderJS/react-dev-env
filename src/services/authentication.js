import { network } from '../utils';

function login(data) {
    return network.post('/api/login/doLogin/', data);
}

function logout() {
    return network.post('/api/login/doLogout');
}

export { login, logout };