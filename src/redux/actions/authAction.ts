import { useNavigate } from "react-router-dom";
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../constant/Types";

export const logoutRequest = () => (dispatch: any) => {
  dispatch({ type: LOGIN_ERROR });
};

export const login = (body: any) => (dispatch: any) => {
  dispatch({ type: LOGIN_SUCCESS, payload: body });
};
