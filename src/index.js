import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers , applyMiddleware, compose} from 'redux';
import counterReducer from './store/reducers/counterReducer';
import resultReducer from './store/reducers/resultReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
  ctrReducer : counterReducer,
  resReducer : resultReducer
})

const logger = store => {
  return next => {
    return action => {
      console.log('[Middle Ware] action ' , action);
      const result = next(action);
      console.log('[Middle Ware] store.getData() ' , store.getState());
      return result;
    }
  }
}
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =createStore(rootReducer,composeEnhancer(applyMiddleware(logger, thunk)));


ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
