import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  // answers: "",
  // questions: "",
  // tags: ""
};

const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName(state, action) {
      const states = state;
      states.name = action.payload.name;
    },
    setEmail(state, action) {
      const states = state;
      states.email = action.payload.email;
    },
    // setUser: (state, action) => {
    //   const states = state;
    //   states.name = action.payload.name;
    //   states.email = action.payload.email;
    // },
  },
});

const store = configureStore({
  reducer: userStore.reducer,
});

export const userActions = userStore.actions;

// export const { setUser } = userSlice.actions;

// export const selectName = state => state.user.name;
// export const selectEmail = state => state.user.email;

export default store;
