import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import App from "./app";
import store from "./store";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app'));

