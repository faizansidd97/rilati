import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import CareerReducer from "./careerReducer";
import { AuthState } from "./Modules/auth";
import { CareerState } from "./Modules/career";

interface CombineReducers {
  auth: AuthState;
  career: CareerState;
}
export default combineReducers<CombineReducers>({
  auth: AuthReducer,
  career: CareerReducer,
});

// export default AuthReducer;
