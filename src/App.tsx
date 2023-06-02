import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { Button, ConfigProvider, theme } from "antd";
import Views from "./views";
import { Provider } from "react-redux";
import storeFactory from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { store, persistor } = storeFactory();
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#ff4742",
          fontFamily: "'Nunito', sans-serif",
        },
      }}
    >
      <Button onClick={() => setIsDarkMode(!isDarkMode)}>check</Button>
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
