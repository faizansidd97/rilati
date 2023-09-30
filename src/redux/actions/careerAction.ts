import {
  deleteCareerApi,
  getCareerbyIdApi,
  postCareerApi,
  updateCareerApi,
} from "src/network/network";
import {
  CAREER_BYID_ERROR,
  CAREER_BYID_REQUEST,
  CAREER_BYID_SUCCESS,
  CAREER_ERROR,
  CAREER_LIKE_REQUEST,
  CAREER_LIKE_SUCCESS,
  CAREER_META_ERROR,
  CAREER_META_REQUEST,
  CAREER_META_SUCCESS,
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

export const careerMeta =
  (id: number, body: object, cb: Function) => (dispatch: any) => {
    dispatch({ type: CAREER_META_REQUEST });
    httpService
      .patch(`/career/update-count/${id}`, body)
      .then((res) => {
        const {
          data: { data },
        }: any = res;

        dispatch({
          type: CAREER_META_SUCCESS,
          payload: { data, meta: res?.data },
        });
        cb();
      })
      .catch((err) => {
        dispatch({ type: CAREER_META_ERROR });
      });
  };

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
    dispatch({ type: CAREER_REQUEST });
    postCareerApi(body)
      .then((res) => {
        callback("Career successfully added");
        dispatch({ type: CAREER_SUCCESS });
      })
      .catch((err) => {
        console.log("err", err);

        dispatch({ type: CAREER_ERROR });
      });
  };
export const updateCareer =
  (id: any, body: any, callback: Function) => (dispatch: any) => {
    dispatch({ type: CAREER_BYID_REQUEST });
    updateCareerApi(id, body)
      .then((res) => {
        dispatch({ type: CAREER_BYID_SUCCESS });
        callback("Career successfully updated");
      })
      .catch((err) => {
        message.error(err?.response?.data?.message);
        dispatch({ type: CAREER_BYID_ERROR });
      });
  };

export const likeCareer = (body: any, cb?: any) => (dispatch: any) => {
  dispatch({ type: CAREER_LIKE_REQUEST });
  httpService
    .post(`/career-likes`, body)
    .then((res) => {
      dispatch({ type: CAREER_LIKE_SUCCESS });
      cb();
    })
    .catch((err) => {
      message.error(err?.response?.data?.message);
      dispatch({ type: CAREER_LIKE_SUCCESS });
    });
};
export const likePostCareer =
  (id: any, body: any, cb?: any) => (dispatch: any) => {
    return new Promise((resolve, reject) => {
      dispatch({ type: CAREER_LIKE_REQUEST });
      httpService
        .patch(`/career/update-count/${id}`, body)
        .then((res) => {
          dispatch({ type: CAREER_LIKE_SUCCESS });
          resolve(res);
        })
        .catch((err) => {
          reject();
          message.error(err?.response?.data?.message);
          dispatch({ type: CAREER_LIKE_SUCCESS });
        });
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
