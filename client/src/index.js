import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux';
// import promiseMiddleware from 'redux-promise';
// import reduxThunk from 'redux-thunk';
// import reducer from './redux/reducers';
// const createStoreWidthMiddleware = applyMiddleware(promiseMiddleware, reduxThunk)(createStore);
import App from './App';
import store from './store/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
