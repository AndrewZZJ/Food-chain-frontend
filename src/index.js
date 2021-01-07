import React from "react";
import ReactDOM from "react-dom";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faInfoCircle,
    faExchangeAlt,
    faPlusCircle,
    faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import "./font.css";
import "./index.css";

// React router
import {Provider} from "react-redux";

// Imports
import Socket from "./components/Socket";

import store from "./store";
import RouterWithRedux from "./RouterWithRedux";

// Font awesome library
library.add(
    faInfoCircle,
    faExchangeAlt,
    faPlusCircle,
    faMinusCircle,
);

// Main entry
ReactDOM.render(
    <Provider store={store}>
        <Socket/>
        <RouterWithRedux/>
    </Provider>,
    document.getElementById("root")
);
