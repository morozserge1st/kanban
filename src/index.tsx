import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './app';
import './styles.scss';
import rootReducer from './reducers/root-reducer';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware()
));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
