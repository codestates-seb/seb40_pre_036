import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import App from './App';
import reducer from './redux/reducers';
// import store from './store/reducer';

const createStoreWidthMiddleware = applyMiddleware(promiseMiddleware, reduxThunk)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider
    store={createStoreWidthMiddleware(
      // 리듀서를 생성후 넣어준다
      reducer,
      // 개발자 도구를 사용하기 위한 설정
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )}
  >
    <App />
  </Provider>,
);
