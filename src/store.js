import {compose, createStore, combineReducers} from "@reduxjs/toolkit";

import userReducer from "./reducers/user";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        userReducer
    }),
    composeEnhancer()
);