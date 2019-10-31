import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import tableReducer from "./reducers/tableReducer";
// import startListener from "./Sagas";

// const saga = createSagaMiddleware();
const store = createStore(
  tableReducer,
  // applyMiddleware(saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// saga.run(startListener);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
