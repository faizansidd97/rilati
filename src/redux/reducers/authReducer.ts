import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
} from "../../constant/Types";
import { AuthState } from "./Modules/auth";

// let loggedIn  =
const initialState: AuthState = {
  isLogin: false,
  user: null,
  loginLoader: false,
  signLoader: false,
  forgotLoading: false,
  resetPasswordLoading: false,
  profileLoading: false,
  requestRoleLoading: false,
  settingsLoading: false,
  forgotLoader: false,
  resetLoader: false,
  usersList: [],
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLogin: false,
        user: null,
        loginLoader: false,
      };
    }

    case LOGIN_REQUEST: {
      return Object.assign({}, state, {
        loginLoader: true,
        isLogin: false,
      });
    }

    case LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        isLogin: true,
        user: action.payload,
        loginLoader: false,
      });
    }

    case LOGIN_ERROR: {
      return Object.assign({}, state, {
        loginLoader: false,
        isLogin: false,
      });
    }
    default:
      return state;
  }
};

export default authReducer;
