import {
  deleteCareerApi,
  getCareerbyIdApi,
  postCareerApi,
  updateCareerApi,
} from "src/network/network";
import {
  CAREER_BYID_SUCCESS,
  CAREER_ERROR,
  CAREER_REQUEST,
  CAREER_SUCCESS,
} from "src/constant/Types";
import { httpService } from "src/network/axiosAgent";
import { message } from "antd";

export const getCareer = (params?: any) => (dispatch: any) => {
  dispatch({ type: CAREER_REQUEST });
  httpService
    .get(`/career`, { params })
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({ type: CAREER_SUCCESS, payload: { data, meta: res?.data } });
    })
    .catch((err) => {
      dispatch({ type: CAREER_ERROR });
    });
};
// export const getCareer =
//   (page = 1, take = 20, title?: string, sort_by?: string, admission_rank?:string) =>
//   (dispatch: any) => {
//     dispatch({ type: CAREER_REQUEST });
//     httpService
//       .get(
//         `/career?page=${page}&take=${take}${title ? `&title=${title}` : ""}${
//           sort_by ? `&sort_by=${sort_by}` : ""
//         }`
//       )
//       .then((res) => {
//         const {
//           data: { data },
//         }: any = res;

//         dispatch({ type: CAREER_SUCCESS, payload: { data, meta: res?.data } });
//       })
//       .catch((err) => {
//         dispatch({ type: CAREER_ERROR });
//       });
//   };
export const getCareerById = (id: any, param?: any) => (dispatch: any) => {
  dispatch({ type: CAREER_REQUEST });
  getCareerbyIdApi(id, param)
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({ type: CAREER_BYID_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: CAREER_ERROR });
    });
};
export const postCareer =
  (body: any, callback: Function) => (dispatch: any) => {
    dispatch({ type: CAREER_REQUEST, payload: body });
    postCareerApi(body)
      .then((res) => {
        const {
          data: { data },
        }: any = res;
        console.log("res", res);

        dispatch({ type: CAREER_SUCCESS });
        callback("Career successfully added");
      })
      .catch((err) => {
        console.log("err", err);

        dispatch({ type: CAREER_ERROR });
      });
  };
export const updateCareer =
  (id: any, body: any, callback: Function) => (dispatch: any) => {
    dispatch({ type: CAREER_REQUEST });
    updateCareerApi(id, body)
      .then((res) => {
        const {
          data: { data },
        }: any = res;
        console.log("res", data);
        dispatch({ type: CAREER_SUCCESS, payload: data });
        callback("Career successfully updated");
      })
      .catch((err) => {
        message.error(err?.response?.data?.message);
        dispatch({ type: CAREER_ERROR });
      });
  };
export const deleteCareer = (id: any) => (dispatch: any) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: CAREER_REQUEST });
    deleteCareerApi(id)
      .then((res) => {
        const {
          data: { data },
        }: any = res;
        resolve(data);

        dispatch({ type: CAREER_SUCCESS });
      })
      .catch((err) => {
        reject(err);
        dispatch({ type: CAREER_ERROR });
      });
  });
};
