import Environment from "../network/baseUrl";
import { httpService, resetHeaders } from "../network/axiosAgent";
import storeFactory from "../redux/store";
// import { IMAGE_URL } from "../constant/Types";
import { logoutRequest } from "../redux/actions/authAction";
import { HeadersDefaults } from "axios";
import placeholder from "../assets/images/imagePlaceholder.png";
// import { userInfo } from "os";

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}
// interface LoginKeys{
//     auth: any,
//     cb: any,
// }

const { store } = storeFactory();
export const getToken = () => {
  const token = localStorage.getItem(Environment.LOCAL_STORAGE_KEY);
  if (!token) return false;

  // return JSON.parse(atob(token));
  // console.log("token",token);
  return JSON.parse(token);
};

export const isLogin = () => {
  if (localStorage.getItem(Environment.LOCAL_STORAGE_KEY)) {
    //private agent headers set
    return true;
  }

  return false;
};

export const logout = ({ unauthenticated }: any) => {
  // Clear token from firebase and backend before clearing localstorage
  // store.dispatch(setPushToken({ token: "", skipDatabaseSync: unauthenticated }));
  localStorage.removeItem(Environment.LOCAL_STORAGE_KEY);
  resetHeaders(httpService);
  store.dispatch(logoutRequest());
};

export const saveToLocalStorage = (res: any) => {
  if (res.token) {
    localStorage.setItem(
      Environment.LOCAL_STORAGE_KEY,
      JSON.stringify(res.token)
    );
  }
};

export const saveToUserLocalStorage = ({ user }: any) => {
  if (user) {
    const getUser = localStorage.getItem(Environment.LOCAL_STORAGE_USER_KEY);
    if (getUser) {
      let user = JSON.parse(getUser);
      user = {
        ...user,
      };
      localStorage.setItem(
        Environment.LOCAL_STORAGE_USER_KEY,
        JSON.stringify(user)
      );
    } else {
      localStorage.setItem(
        Environment.LOCAL_STORAGE_USER_KEY,
        JSON.stringify(user)
      );
    }
  }
};
export const getFromLocalStorage = (key: any) => {
  const getResult = localStorage.getItem(key);
  if (!getResult) return false;

  return JSON.parse(getResult);
};

export const login = (auth: any) => {
  httpService.defaults.headers = {
    ...httpService.defaults.headers,
    Authorization: `Bearer ${auth.currentUser.token}`,
    // user_id: auth.user_id,
  } as CommonHeaderProperties;
  // if (cb) cb();
  // store.dispatch({ type: LOGIN_SUCCESS, auth });
};

// export const getImagePath = (name: any) => {
//   if (name) {
//     return IMAGE_URL + name;
//   } else {
//     return placeholder;
//   }
// };
