import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from "./components/App";
import reducers from './reducers';
// redux store
// Reducers specify how the application's state changes in response to actions sent to the store
const store = createStore(reducers, {}, applyMiddleware());


ReactDOM.render(
    <Provider store={store}><App /></Provider>,  // react component that reads redux changes
    document.querySelector("#root")
);
