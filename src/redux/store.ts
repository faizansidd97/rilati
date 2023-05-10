import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { encryptTransform } from "redux-persist-transform-encrypt";
import reducers from "./reducers/rootReducer";
import { applyMiddleware, createStore, compose } from "redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// interface Reducers{
//   Reducer: typeof reducers
// }
const encryptor = encryptTransform({
  secretKey: "rilati",
  onError: ({ error }: any) => {},
});

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["AuthReducer"],
  stateReconciler: autoMergeLevel2,
  transforms: [encryptor],
};

const persistedReducer = persistReducer<any, any>(persistConfig, reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);

const storeFactory = () => {
  let store = createStore(persistedReducer, composeEnhancers(middleware));
  let persistor = persistStore(store);
  return () => {
    const obj = { store, persistor };
    return obj;
  };
};
export default storeFactory();
