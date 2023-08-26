import {
  INSPIRATION_ERROR,
  INSPIRATION_REQUEST,
  INSPIRATION_SUCCESS,
  INSPIRATION_DELETE_ERROR,
  INSPIRATION_DELETE_REQUEST,
  INSPIRATION_DELETE_SUCCESS,
  INSPIRATION_BY_ID_REQUEST,
  INSPIRATION_BY_ID_SUCCESS,
  INSPIRATION_BY_ID_ERROR,
} from "src/constant/Types";
import { httpService } from "src/network/axiosAgent";

export const getInspiration = (params?: any) => (dispatch: any) => {
  dispatch({ type: INSPIRATION_REQUEST });
  httpService
    .get(`/inspirational-people`, { params })
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({
        type: INSPIRATION_SUCCESS,
        payload: { data, meta: res?.data },
      });
    })
    .catch((err) => {
      dispatch({ type: INSPIRATION_ERROR });
    });
};
export const getByIdInspiration =
  (id: any, params?: any) => (dispatch: any) => {
    dispatch({ type: INSPIRATION_BY_ID_REQUEST });
    httpService
      .get(`/inspirational-people/${id}`, { params })
      .then((res) => {
        const {
          data: { data },
        }: any = res;

        dispatch({
          type: INSPIRATION_BY_ID_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({ type: INSPIRATION_BY_ID_ERROR });
      });
  };

export const addInspiration = (body: any, cb: any) => (dispatch: any) => {
  dispatch({ type: INSPIRATION_REQUEST });
  httpService
    .post(`/inspirational-people`, body)
    .then((res) => {
      cb();
      dispatch({
        type: INSPIRATION_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({ type: INSPIRATION_ERROR });
    });
};
export const updateInspiration =
  (id: any, body: any, cb: any) => (dispatch: any) => {
    dispatch({ type: INSPIRATION_REQUEST });
    httpService
      .patch(`/inspirational-people/${id}`, body)
      .then((res) => {
        cb();
        dispatch({
          type: INSPIRATION_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({ type: INSPIRATION_ERROR });
      });
  };

export const deleteInspiration = (id: any) => (dispatch: any) => {
  dispatch({ type: INSPIRATION_DELETE_REQUEST });
  httpService
    .delete(`/inspirational-people/${id}`)
    .then((res) => {
      dispatch({
        type: INSPIRATION_DELETE_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({ type: INSPIRATION_DELETE_ERROR });
    });
};
