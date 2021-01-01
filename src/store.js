import {compose, createStore, combineReducers, applyMiddleware} from "@reduxjs/toolkit";

import userReducer from "./reducers/user";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const asyncFunctionMiddleware = storeAPI => next => action => (
    (typeof action === "function") ? 
        action(storeAPI.dispatch, storeAPI.getState) :
        next(action)
);

export default createStore(
    combineReducers({
        userReducer
    }),
    composeEnhancer(
        applyMiddleware(asyncFunctionMiddleware)
    )
);