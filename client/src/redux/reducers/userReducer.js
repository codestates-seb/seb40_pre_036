import { REGISTER_USER, LOGIN_USER } from '../actions/types';

const initialState = {
  loggedInUser: null,
  users: [
    {
      id: 1,
      username: '김코딩',
      email: '123',
      password: '123',
    },
    {
      id: 2,
      username: '박해커',
      email: 'hacker@coding.com',
      password: '1234',
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loginSuccess: action.payload };
    case LOGIN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
