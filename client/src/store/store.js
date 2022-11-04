import { configureStore, combineReducers } from '@reduxjs/toolkit';

import LoggedStates from './login/LoggedStates';

const rootReducer = combineReducers({
  Logged: LoggedStates,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
