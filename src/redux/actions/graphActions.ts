import { GRAPH_ERROR, GRAPH_REQUEST, GRAPH_SUCCESS } from "src/constant/Types";
import { httpService } from "src/network/axiosAgent";

export const getGraph = () => (dispatch: any) => {
  dispatch({ type: GRAPH_REQUEST });
  httpService
    .get(`/diagraph`)
    .then((res) => {
      const { data }: any = res;

      dispatch({ type: GRAPH_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: GRAPH_ERROR });
    });
};
