import { applyMiddleware, combineReducers, compose, createStore } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import userReducer from "./reducers/user";
import socketReducer from "./reducers/socket";
import gameReducer from "./reducers/game";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const asyncFunctionMiddleware = storeAPI => next => action => (
    (typeof action === "function") ?
        action(storeAPI.dispatch, storeAPI.getState) :
        next(action)
);

export const history = createBrowserHistory();

export default createStore(
    combineReducers({
        router: connectRouter(history),
        user: userReducer,
        socket: socketReducer,
        game: gameReducer,
    }),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
            asyncFunctionMiddleware
        )
    )
);
