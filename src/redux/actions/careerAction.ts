import { useNavigate } from "react-router-dom";
import Environment from "src/network/baseUrl";
import { loginApi } from "src/network/network";
import { message } from "antd";
import {
  saveToUserLocalStorage,
  saveToLocalStorage,
  login as setHeaders,
} from "src/helper/helper";
import {
  CAREER_ERROR,
  CAREER_REQUEST,
  CAREER_SUCCESS,
} from "src/constant/Types";

export const getCareer = (body: any) => (dispatch: any) => {
  dispatch({ type: CAREER_REQUEST, payload: body });
  loginApi(body)
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
