import {
  INDUSTRIES_ERROR,
  INDUSTRIES_REQUEST,
  INDUSTRIES_SUCCESS,
  SUBJECT_ERROR,
  SUBJECT_REQUEST,
  SUBJECT_SUCCESS,
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

export const getUsers = () => (dispatch: any) => {
  dispatch({ type: USERS_REQUEST });
  httpService
    .get(`/users`)
    .then((res) => {
      const { data }: any = res;
      console.log("logogog", res);

      dispatch({ type: USERS_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: USERS_ERROR });
    });
};
