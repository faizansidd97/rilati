import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_ERROR,
  CATEGORY_BYID_SUCCESS,
  DELETE_SUCCESS,
} from "../../constant/Types";
import { CategoryState } from "./Modules/category";

const initialState: CategoryState = {
  loader: false,
  category: [],
  categoryById: {},
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CATEGORY_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case CATEGORY_SUCCESS: {
      return Object.assign({}, state, {
        category: action.payload,
        loader: false,
      });
    }

    case CATEGORY_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }

    case CATEGORY_BYID_SUCCESS: {
      return Object.assign({}, state, {
        categoryById: action.payload,
        loader: false,
      });
    }
    case DELETE_SUCCESS: {
      return Object.assign({}, state, {
        loader: false,
      });
    }

    default:
      return state;
  }
};

export default categoryReducer;
