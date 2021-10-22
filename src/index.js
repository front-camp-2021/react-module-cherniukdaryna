import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { globalReducer } from "./reducer/reducer";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk)
const store = createStore(globalReducer, undefined, middleware);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);