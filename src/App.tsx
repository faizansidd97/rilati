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
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff4742",
          fontFamily: "'Nunito', sans-serif",
        },
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Views />
          </Router>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
