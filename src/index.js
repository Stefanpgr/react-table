import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import tableReducer from "./reducers/tableReducer";

// let store = createStore(

//   window.devToolsExtension && window.devToolsExtension()
// );
const store = createStore(tableReducer);
// Display to console
store.subscribe(() => console.log(store.getState()));
console.log(store.getState());
// DISPATCHER
// store.dispatch(decrement());
// store.dispatch(increment());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
