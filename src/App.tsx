import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Views from "./views";
import { Provider } from "react-redux";
import storeFactory from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
// Initialize exporting module

function App() {
  const { store, persistor } = storeFactory();
  const handleVerify = (value: any) => {
    // console.log("valiie", value);
  };
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LcIL2YoAAAAAB5zQK13m5bKU0lEjIRBQfU9jBbH"
      useEnterprise={true}
    >
      <GoogleReCaptcha onVerify={handleVerify} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Views />
          </Router>
        </PersistGate>
      </Provider>
    </GoogleReCaptchaProvider>
  );
}

export default App;
