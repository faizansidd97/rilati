import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { Button, ConfigProvider, theme } from "antd";
import Views from "./views";
import { Provider, useDispatch, useSelector } from "react-redux";
import storeFactory from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { themeSwitcher } from "./redux/actions/themeAction";

function App() {
  const { store, persistor } = storeFactory();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Views />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
