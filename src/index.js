import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { store, persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react'
//const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
       </React.StrictMode>
   </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
