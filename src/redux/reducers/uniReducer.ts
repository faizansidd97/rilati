import {
  UNI_REQUEST,
  UNI_SUCCESS,
  UNI_ERROR,
  UNI_BYID_SUCCESS,
} from "../../constant/Types";
import { UniState } from "./Modules/uni";

const initialState: UniState = {
  loader: false,
  uni: [],
  uniById: {},
};

const uniReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UNI_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case UNI_SUCCESS: {
      return Object.assign({}, state, {
        uni: action.payload,
        loader: false,
      });
    }

    case UNI_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }
    case UNI_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case UNI_BYID_SUCCESS: {
      return Object.assign({}, state, {
        uniById: action.payload,
        loader: false,
      });
    }

    case UNI_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }
    default:
      return state;
  }
};

export default uniReducer;
