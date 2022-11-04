import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  loggedInUser: null,
  users: [],
};

const signupStore = createSlice({
  name: 'isSign',
  initialState,
  reducers: {
    register(state) {
      const states = state;
      states.isSign = true;
    },
  },
});

const store = configureStore({
  reducer: signupStore.reducer,
});

export const signupActions = signupStore.actions;

export default store;
