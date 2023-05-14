// Startup point for the client side application
import 'babel-polyfill';     // to get rid of generator runtime error due to babel not understaning async await in users action 
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
