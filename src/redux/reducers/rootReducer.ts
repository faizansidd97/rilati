import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import CareerReducer from "./careerReducer";
import UniReducer from "./uniReducer";
import { AuthState } from "./Modules/auth";
import { CareerState } from "./Modules/career";
import { UniState } from "./Modules/uni";

interface CombineReducers {
  auth: AuthState;
  career: CareerState;
  uni: UniState;
}
export default combineReducers<CombineReducers>({
  auth: AuthReducer,
  uni: UniReducer,
  career: CareerReducer,
});

// export default AuthReducer;
