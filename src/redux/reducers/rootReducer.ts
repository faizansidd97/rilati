import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import { AuthState } from "./Modules/auth";

interface CombineReducers {
  auth: AuthState;
}
export default combineReducers<CombineReducers>({
  auth: AuthReducer,
});

// export default AuthReducer;
