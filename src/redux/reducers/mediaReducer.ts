import {
  MEDIA_REQUEST,
  MEDIA_SUCCESS,
  MEDIA_ERROR,
} from "../../constant/Types";
import { MediaState } from "./Modules/media";

const initialState: MediaState = {
  loader: false,
  media: [],
};

const mediaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MEDIA_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case MEDIA_SUCCESS: {
      return Object.assign({}, state, {
        media: action.payload,
        loader: false,
      });
    }

    case MEDIA_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }

    default:
      return state;
  }
};

export default mediaReducer;
