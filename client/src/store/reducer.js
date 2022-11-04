import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialToken = localStorage.getItem('accessToken');
const initialState = {
  isLogin: !!initialToken,
  accessToken: initialToken,
  displayName: null,
  userId: null,
};

const loginStore = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    login(state, action) {
      const states = state;
      states.isLogin = true;
      states.userId = action.payload;
      states.displayName = action.payload.displayName;
      states.answers = action.payload.answers;
      states.questions = action.payload.questions;
      states.tags = action.payload.tags;
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
