import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { ConfigProvider } from "antd";
import Views from "./views";
import { Provider } from "react-redux";
import storeFactory from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const { store, persistor } = storeFactory();
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff4742",
          },
        }}
      >
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Views />
          </Router>
        </PersistGate>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
