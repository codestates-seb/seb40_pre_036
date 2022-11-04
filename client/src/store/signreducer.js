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

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'REGISTER':
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };
//     default:
//       return state;
//   }
// };
