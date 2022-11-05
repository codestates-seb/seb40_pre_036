import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const initialToken = localStorage.getItem('accessToken');
const initialState = {
  isLogin: !!initialToken,
  accessToken: initialToken,
  displayName: '',
  email: '',
};

const loginStore = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    login(state, action) {
      const states = state;
      states.isLogin = true;
      // states.email = action.payload.email;
      // states.displayName = action.payload.displayName;
      // states.userId = action.payload.userId;
      // states.displayName = action.payload;
      // states.answers = action.payload.answers;
      // states.questions = action.payload.questions;
      // states.tags = action.payload.tags;
      console.log('payload', action.payload, 'state', state);
    },
    logout(state) {
      const states = state;
      states.isLogin = false;
    },
  },
});

const store = configureStore({
  reducer: loginStore.reducer,
});

export const loginActions = loginStore.actions;

export default store;
