import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import CareerReducer from "./careerReducer";
import UniReducer from "./uniReducer";
import MediaReducer from "./mediaReducer";
import CategoryReducer from "./categoryReducer";
import { AuthState } from "./Modules/auth";
import { CareerState } from "./Modules/career";
import { UniState } from "./Modules/uni";
import { MediaState } from "./Modules/media";
import { CategoryState } from "./Modules/category";

interface CombineReducers {
  auth: AuthState;
  career: CareerState;
  uni: UniState;
  media: MediaState;
  category: CategoryState;
}
export default combineReducers<CombineReducers>({
  auth: AuthReducer,
  uni: UniReducer,
  career: CareerReducer,
  media: MediaReducer,
  category: CategoryReducer,
});

// export default AuthReducer;
