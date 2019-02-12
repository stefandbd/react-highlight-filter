import React, { Component } from 'react';
import './App.css';
import combinedReducers from './reducers'
import Main from './components/Main'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

let store = createStore(
  combinedReducers,
  {},
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Main classes={{root:'', red:'', yellow:'', green: ''}}/>
      </Provider>
    );
  }
}

export default App



