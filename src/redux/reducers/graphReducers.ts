import {
  GRAPH_REQUEST,
  GRAPH_SUCCESS,
  GRAPH_ERROR,
} from "../../constant/Types";
import { GraphState } from "./Modules/graph";

const initialState: GraphState = {
  mailLoader: false,
  graphData: [],
};

const graphReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case GRAPH_REQUEST: {
      return Object.assign({}, state, {
        mailLoader: true,
      });
    }

    case GRAPH_SUCCESS: {
      return Object.assign({}, state, {
        graphData: action.payload,
        mailLoader: false,
      });
    }

    case GRAPH_ERROR: {
      return Object.assign({}, state, {
        mailLoader: false,
      });
    }

    default:
      return state;
  }
};

export default graphReducers;
