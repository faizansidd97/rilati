import {
  INDUSTRIES_ERROR,
  INDUSTRIES_REQUEST,
  INDUSTRIES_SUCCESS,
  SUBJECT_ERROR,
  SUBJECT_REQUEST,
  SUBJECT_SUCCESS,
  USERS_DELETE_ERROR,
  USERS_DELETE_REQUEST,
  USERS_DELETE_SUCCESS,
  USERS_ERROR,
  USERS_REQUEST,
  USERS_SUCCESS,
} from "src/constant/Types";
import { httpService } from "src/network/axiosAgent";

export const getSubjects = () => (dispatch: any) => {
  dispatch({ type: SUBJECT_REQUEST });
  httpService
    .get(`/subjects`)
    .then((res) => {
      const { data }: any = res;

      dispatch({ type: SUBJECT_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: SUBJECT_ERROR });
    });
};
export const getIndustries = () => (dispatch: any) => {
  dispatch({ type: INDUSTRIES_REQUEST });
  httpService
    .get(`/industries`)
    .then((res) => {
      const { data }: any = res;

      dispatch({ type: INDUSTRIES_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: INDUSTRIES_ERROR });
    });
};

export const getUsers = (params?: any) => (dispatch: any) => {
  dispatch({ type: USERS_REQUEST });
  httpService
    .get(`/users`, params)
    .then((res) => {
      const { data }: any = res;

      dispatch({ type: USERS_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: USERS_ERROR });
    });
};

export const updateUser = (id: any, body: any, cb: any) => (dispatch: any) => {
  dispatch({ type: USERS_REQUEST });
  httpService
    .patch(`/users/${id}`, body)
    .then((res) => {
      const { data }: any = res;
      cb();
      dispatch({ type: USERS_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: USERS_ERROR });
    });
};
export const getUserById = (id: any, params?: any) => (dispatch: any) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: USERS_REQUEST });
    httpService
      .get(`/users/${id}`, params)
      .then((res) => {
        const {
          data: { data },
        }: any = res;
        resolve(data);
        dispatch({ type: USERS_SUCCESS, payload: data });
      })
      .catch((err) => {
        reject(err);
        dispatch({ type: USERS_ERROR });
      });
  });
};

export const deleteUsers = (id: any) => (dispatch: any) => {
  return new Promise((resolve, rejects) => {
    dispatch({ type: USERS_DELETE_REQUEST });
    httpService
      .delete(`/users/${id}`)
      .then((res) => {
        const { data }: any = res;
        resolve(res);
        dispatch({ type: USERS_DELETE_SUCCESS });
      })
      .catch((err) => {
        rejects(err);
        dispatch({ type: USERS_DELETE_ERROR });
      });
  });
};
