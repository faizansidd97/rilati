import {
  INSPIRATION_DELETE_ERROR,
  INSPIRATION_DELETE_REQUEST,
  INSPIRATION_DELETE_SUCCESS,
  INSPIRATION_ERROR,
  INSPIRATION_REQUEST,
  INSPIRATION_SUCCESS,
} from "src/constant/Types";
import { InspirationState } from "./Modules/inspiration";

const initialState: InspirationState = {
  loader: false,
  inspiration: [],
  metaData: {},
  totaPage: 0,
  deleteLoader: false,
};

const inspirationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INSPIRATION_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case INSPIRATION_SUCCESS: {
      return Object.assign({}, state, {
        inspiration: [...action.payload?.data],
        metaData: action.payload,
        totaPage: action.payload.meta?.lastPage,
        loader: false,
      });
    }

    case INSPIRATION_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }
    case INSPIRATION_DELETE_REQUEST: {
      return Object.assign({}, state, {
        deleteLoader: true,
      });
    }

    case INSPIRATION_DELETE_SUCCESS: {
      return Object.assign({}, state, {
        deleteLoader: false,
      });
    }

    case INSPIRATION_DELETE_ERROR: {
      return Object.assign({}, state, {
        deleteLoader: false,
      });
    }

    default:
      return state;
  }
};

export default inspirationReducer;
