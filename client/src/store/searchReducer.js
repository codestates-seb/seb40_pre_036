import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  keyword: '',
};

const searchStore = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search(state, action) {
      const states = state;
      states.keyword = action.payload.keyword;
      // console.log('payload', action.payload, 'state', state);
    },
  },
});

const store = configureStore({
  reducer: searchStore.reducer,
});

export const searchActions = searchStore.actions;

export default store;
