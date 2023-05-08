import {
  CAREER_REQUEST,
  CAREER_SUCCESS,
  CAREER_ERROR,
  CAREER_BYID_REQUEST,
  CAREER_BYID_SUCCESS,
  CAREER_BYID_ERROR,
} from "../../constant/Types";
import { CareerState } from "./Modules/career";

const initialState: CareerState = {
  loader: false,
  career: [],
  careerById: {},
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CAREER_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case CAREER_SUCCESS: {
      return Object.assign({}, state, {
        career: action.payload,
        loader: false,
      });
    }

    case CAREER_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }
    case CAREER_BYID_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case CAREER_BYID_SUCCESS: {
      return Object.assign({}, state, {
        careerById: action.payload,
        loader: false,
      });
    }

    case CAREER_BYID_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }
    default:
      return state;
  }
};

export default authReducer;
