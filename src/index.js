import React from "react";
import ReactDOM from "react-dom";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Provider} from "react-redux";

import LoginPage from "./pages/LoginPage";
import WaitingPage from "./pages/WaitingPage";

import "./index.css";
import store from "./store";

library.add(
    faInfoCircle
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/waiting">
                    <WaitingPage />
                </Route>
                <Route path="/">
                    <LoginPage />
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
