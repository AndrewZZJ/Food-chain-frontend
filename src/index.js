import React from "react";
import ReactDOM from "react-dom";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faExchangeAlt, faInfoCircle, } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import Socket from "./components/Socket";

import "./index.css";
import store from "./store";
import RouterWithRedux from "./RouterWithRedux";

library.add(
    faInfoCircle,
    faExchangeAlt
);

ReactDOM.render(
    <Provider store={store}>
        <Socket/>
        <RouterWithRedux/>
    </Provider>,
    document.getElementById("root")
);
