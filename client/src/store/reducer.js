import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialToken = localStorage.getItem('accessToken');
const initialState = { isLogin: !!initialToken, accessToken: initialToken };

const loginStore = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    Login: state => {
      const states = state;
      states.isLogin = true;
    },
    Logout: state => {
      const states = state;
      states.isLogin = false;
    },
  },
});

const store = configureStore({
  reducer: loginStore.reducer,
});

export const loginAction = loginStore.actions;

export default store;
