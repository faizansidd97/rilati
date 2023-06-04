import { THEME_REQUEST } from "../../constant/Types";
import { ThemeState } from "./Modules/theme";

const initialState: ThemeState = {
  isDark: false,
};

const mediaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case THEME_REQUEST: {
      return Object.assign({}, state, {
        isDark: action.payload,
      });
    }

    default:
      return state;
  }
};

export default mediaReducer;
