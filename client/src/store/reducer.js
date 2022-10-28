import { createStore } from '@reduxjs/toolkit';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default createStore(reducer);
