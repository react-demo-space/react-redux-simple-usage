import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state = {
  count: 0
}, action) => {
  switch (action.type) {
    case 'increase':
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  // Provider 的唯一功能就是传入 store 对象
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
