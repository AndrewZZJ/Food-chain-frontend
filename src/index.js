import React from "react";
import ReactDOM from "react-dom";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faInfoCircle,
    faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// React router
import {Provider} from "react-redux";

// Imports
import Socket from "./components/Socket";

import "./index.css";
import store from "./store";
import RouterWithRedux from "./RouterWithRedux";

// Font awesome library
library.add(
    faInfoCircle,
    faExchangeAlt
);

// Main entry
ReactDOM.render(
    <Provider store={store}>
        <Socket/>
        <RouterWithRedux/>
    </Provider>,
    document.getElementById("root")
);
