import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import * as actionCreators from './actionCreators';
import App from './App';
import './index.css';

// Create the Redux store.
const store = createStore(reducer, undefined, applyMiddleware(thunk));

// Create a component that is connected to the Redux store.
// Inject the Redux state and the action creators into the props of App.
const mapStateToProps = (state) => state;
const ConnectedApp = connect(mapStateToProps, actionCreators)(App);

ReactDOM.render(
  // Provide the store to the component using React’s `context`.
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
