import { useNavigate } from "react-router-dom";
import Environment from "src/network/baseUrl";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
} from "../../constant/Types";
import { loginApi } from "src/network/network";
import { message } from "antd";
import {
  saveToUserLocalStorage,
  saveToLocalStorage,
  login as setHeaders,
} from "src/helper/helper";

export const logoutRequest = () => (dispatch: any) => {
  localStorage.removeItem(Environment.LOCAL_STORAGE_KEY);
  localStorage.removeItem(Environment.LOCAL_STORAGE_USER_KEY);
  dispatch({ type: LOGOUT_SUCCESS });
};

export const login = (body: any) => (dispatch: any) => {
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
      //ignore-ilint
    })
    .catch((err) => {
      // message.error("Login Failed Unauthorized");
      dispatch({ type: LOGIN_ERROR });
    });
};
