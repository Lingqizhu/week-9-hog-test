import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import "./bootstrap.min.css";
import App from './App';
import Reducer from "./reducers/index";
import { Provider } from "react-redux";
//import store from "./store";
import { composeWithDevTools } from "redux-devtools-extension";
import {createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

const middleware = [thunk];
const store =createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(...middleware))
  );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

