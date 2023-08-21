import Environment from "src/network/baseUrl";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
} from "../../constant/Types";
import { loginApi } from "src/network/network";
import {
  saveToUserLocalStorage,
  saveToLocalStorage,
  login as setHeaders,
} from "src/helper/helper";
import { httpService } from "src/network/axiosAgent";
import { useNavigate } from "react-router-dom";

export const logoutRequest = () => (dispatch: any) => {
  localStorage.removeItem(Environment.LOCAL_STORAGE_KEY);
  localStorage.removeItem(Environment.LOCAL_STORAGE_USER_KEY);
  dispatch({ type: LOGOUT_SUCCESS });
};
let attempt = 0;
export const login = (body: any, cb?: any) => (dispatch: any) => {
  dispatch({ type: LOGIN_REQUEST });
  loginApi(body)
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({ type: LOGIN_SUCCESS, payload: data });
      saveToLocalStorage(data);
      saveToUserLocalStorage(data);
      setHeaders(data);
      cb();
      //ignore-ilint
    })
    .catch((err) => {
      // message.error("Login Failed Unauthorized");
      dispatch({ type: LOGIN_ERROR });
      localStorage.setItem("attempt", `${++attempt}`);
    });
};

export const register = (body: any, cb?: any) => (dispatch: any) => {
  dispatch({ type: LOGIN_REQUEST });
  httpService
    .post(`register`, body)
    .then((res) => {
      const {
        data: { data },
      }: any = res;
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      cb();
      saveToLocalStorage(data);
      saveToUserLocalStorage(data);
      setHeaders(data);
      //ignore-ilint
    })
    .catch((err) => {
      // message.error("Login Failed Unauthorized");
      dispatch({ type: LOGIN_ERROR });
      // localStorage.setItem("attempt", `${++attempt}`);
    });
};
