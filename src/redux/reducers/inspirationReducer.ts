import {
  INSPIRATION_BY_ID_ERROR,
  INSPIRATION_BY_ID_REQUEST,
  INSPIRATION_BY_ID_SUCCESS,
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
  inspirationById: {},
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
        inspiration: [
          ...action.payload?.data?.filter(
            (item: any) => item?.name !== null && item?.image !== null
          ),
        ],
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
    case INSPIRATION_BY_ID_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case INSPIRATION_BY_ID_SUCCESS: {
      return Object.assign({}, state, {
        loader: false,
        inspirationById: action.payload,
      });
    }

    case INSPIRATION_BY_ID_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }

    default:
      return state;
  }
};

export default inspirationReducer;
