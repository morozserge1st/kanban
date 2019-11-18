import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import './styles.scss';
import rootReducer from './reducers/root-reducer';

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
