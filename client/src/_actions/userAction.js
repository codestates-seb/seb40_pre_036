import { LOGIN_USER, REGISTER_USER } from './type';
import { request } from '../_utils/axios';

const USER_URL = '';

export function registerUser(dataToSubmit) {
  const data = request('post', `${USER_URL}`, dataToSubmit);

  return {
    type: REGISTER_USER,
    payload: data,
  };
}

export function loginUser(dataToSubmit) {
  const data = request('post', `${USER_URL}`, dataToSubmit);
  return {
    type: LOGIN_USER,
    payload: data,
  };
}
