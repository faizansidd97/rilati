import {
  SUBJECT_REQUEST,
  SUBJECT_SUCCESS,
  SUBJECT_ERROR,
  INDUSTRIES_REQUEST,
  INDUSTRIES_SUCCESS,
  INDUSTRIES_ERROR,
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_ERROR,
} from "../../constant/Types";
import { SubjectsState } from "./Modules/subject";

const initialState: SubjectsState = {
  loader: false,
  subjects: [],
  industries: [],
  industriesLoader: false,
  users: [],
  userMeta: {},
  userLoader: false,
};

const subjectsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SUBJECT_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case SUBJECT_SUCCESS: {
      return Object.assign({}, state, {
        subjects: action.payload,
        loader: false,
      });
    }

    case SUBJECT_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }
    case INDUSTRIES_REQUEST: {
      return Object.assign({}, state, {
        industriesLoader: true,
      });
    }

    case INDUSTRIES_SUCCESS: {
      return Object.assign({}, state, {
        industries: action.payload,
        industriesLoader: false,
      });
    }

    case INDUSTRIES_ERROR: {
      return Object.assign({}, state, {
        industriesLoader: false,
      });
    }

    case USERS_REQUEST: {
      return Object.assign({}, state, {
        userLoader: true,
      });
    }

    case USERS_SUCCESS: {
      return Object.assign({}, state, {
        users: action.payload?.data,
        userLoader: false,
      });
    }

    case USERS_ERROR: {
      return Object.assign({}, state, {
        userLoader: false,
      });
    }

    default:
      return state;
  }
};

export default subjectsReducer;
