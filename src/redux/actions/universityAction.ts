import {
  deleteUniApi,
  getUniApi,
  postUniApi,
  updateUniApi,
} from "src/network/network";
import {
  UNI_BYID_SUCCESS,
  UNI_ERROR,
  UNI_REQUEST,
  UNI_SUCCESS,
} from "src/constant/Types";
import { httpService } from "src/network/axiosAgent";

export const getUni =
  (page = 1, take = 10) =>
  (dispatch: any) => {
    dispatch({ type: UNI_REQUEST });
    httpService
      .get(`/university?page=${page}&take=${take}`)
      .then((res) => {
        const {
          data: { data },
        }: any = res;

        dispatch({ type: UNI_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: UNI_ERROR });
      });
  };
// export const getUniById = (id: any, param?: any) => (dispatch: any) => {
//   dispatch({ type:UNI_REQUEST });
//   getUnibyIdApi(id, param)
//     .then((res) => {
//       const {
//         data: { data },
//       }: any = res;

//       dispatch({ type:UNI_BYID_SUCCESS, payload: data });
//     })
//     .catch((err) => {
//       dispatch({ type:UNI_ERROR });
//     });
// };
export const postUni = (body: any) => (dispatch: any) => {
  dispatch({ type: UNI_REQUEST, payload: body });
  postUniApi(body)
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({ type: UNI_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: UNI_ERROR });
    });
};
export const updateUni = (body: any) => (dispatch: any) => {
  dispatch({ type: UNI_REQUEST, payload: body });
  updateUniApi(body)
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({ type: UNI_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: UNI_ERROR });
    });
};
export const deleteUni = (body: any) => (dispatch: any) => {
  dispatch({ type: UNI_REQUEST, payload: body });
  deleteUniApi(body)
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({ type: UNI_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: UNI_ERROR });
    });
};
