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
import { Provider } from "react-redux";

import "./font.css";
import "./index.css";

import Socket from "./components/Socket";

import store from "./store";
import RouterWithRedux from "./RouterWithRedux";

library.add(
    faInfoCircle,
    faExchangeAlt,
    faPlusCircle,
    faMinusCircle,
);

ReactDOM.render(
    <Provider store={store}>
        <Socket/>
        <RouterWithRedux/>
    </Provider>,
    document.getElementById("root")
);
