import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import CareerReducer from "./careerReducer";
import UniReducer from "./uniReducer";
import MediaReducer from "./mediaReducer";
import CategoryReducer from "./categoryReducer";
import ThemeReducer from "./themeReducers";
import { AuthState } from "./Modules/auth";
import { CareerState } from "./Modules/career";
import { UniState } from "./Modules/uni";
import { MediaState } from "./Modules/media";
import { CategoryState } from "./Modules/category";
import { ThemeState } from "./Modules/theme";
import { MailState } from "./Modules/mail";
import MailReducers from "./mailReducers";

interface CombineReducers {
  auth: AuthState;
  career: CareerState;
  uni: UniState;
  media: MediaState;
  category: CategoryState;
  theme: ThemeState;
  mail: MailState;
}
export default combineReducers<CombineReducers>({
  auth: AuthReducer,
  uni: UniReducer,
  career: CareerReducer,
  media: MediaReducer,
  category: CategoryReducer,
  theme: ThemeReducer,
  mail: MailReducers,
});

// export default AuthReducer;
