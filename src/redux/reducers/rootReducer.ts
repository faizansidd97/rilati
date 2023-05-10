import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import CareerReducer from "./careerReducer";
import UniReducer from "./uniReducer";
import MediaReducer from "./mediaReducer";
import { AuthState } from "./Modules/auth";
import { CareerState } from "./Modules/career";
import { UniState } from "./Modules/uni";
import { MediaState } from "./Modules/media";

interface CombineReducers {
  auth: AuthState;
  career: CareerState;
  uni: UniState;
  media: MediaState;
}
export default combineReducers<CombineReducers>({
  auth: AuthReducer,
  uni: UniReducer,
  career: CareerReducer,
  media: MediaReducer,
});

// export default AuthReducer;
