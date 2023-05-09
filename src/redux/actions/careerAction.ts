import {
  deleteCareerApi,
  getCareerApi,
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

export const getCareer =
  (page = 1, take = 10) =>
  (dispatch: any) => {
    dispatch({ type: CAREER_REQUEST });
    httpService
      .get(`/career?page=${page}&take=${take}`)
      .then((res) => {
        const {
          data: { data },
        }: any = res;

        dispatch({ type: CAREER_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: CAREER_ERROR });
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
export const postCareer = (body: any) => (dispatch: any) => {
  dispatch({ type: CAREER_REQUEST, payload: body });
  postCareerApi(body)
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({ type: CAREER_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: CAREER_ERROR });
    });
};
export const updateCareer = (id: string, body: any) => (dispatch: any) => {
  dispatch({ type: CAREER_REQUEST, payload: body });
  updateCareerApi(id, body)
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({ type: CAREER_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: CAREER_ERROR });
    });
};
export const deleteCareer = (body: any) => (dispatch: any) => {
  dispatch({ type: CAREER_REQUEST, payload: body });
  deleteCareerApi(body)
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({ type: CAREER_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: CAREER_ERROR });
    });
};
