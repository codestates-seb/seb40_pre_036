import { REGISTER_USER, LOGIN_USER } from './types';
import request from '../../utils/axios';

export function registerUser(dataToSubmit) {
  // const USER_URL = '/register';
  const data = request('post', `/register`, dataToSubmit).then(res =>
    console.log('accessToken', res.accessToken),
  );
  return {
    type: REGISTER_USER,
    payload: data,
  };
}

export function loginUser(data) {
  // const USER_URL = '/login';
  const data2 = request('post', `/login`, data).then(res => {
    console.log('res', res);
    const token = res.accessToken;
    console.log('Token', token);
    localStorage.setItem('jwtToken', token);
    // const token = res.data.accessToken
    return res;
  });
  return {
    type: LOGIN_USER,
    payload: data2,
  };
}
