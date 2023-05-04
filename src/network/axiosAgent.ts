import axios from "axios";
import Environment from "../network/baseUrl";
import { logoutRequest } from "../redux/actions/authAction";
import storeFactory from "../redux/store";
import { message } from "antd";
const { store } = storeFactory();

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PATCH, DELETE",
  "Content-Type": "application/json",
  Authorization: Environment.API_BASE_URL,
};

let authDetails: any;

function resetHeaders({ agent }: any) {
  agent.defaults.headers = headers;
}

const publicAgent = axios.create({
  baseURL: Environment.API_BASE_URL,
  headers: headers,
});

if (localStorage.getItem(Environment.LOCAL_STORAGE_KEY)) {
  authDetails = JSON.parse(
    window.localStorage.getItem(Environment.LOCAL_STORAGE_KEY) || "{}"
  );
}

const httpService = axios.create({
  baseURL: Environment.API_BASE_URL,
  headers: {
    ...headers,

    Authorization: authDetails
      ? `Bearer ${JSON.parse(
          window.localStorage.getItem(Environment.LOCAL_STORAGE_KEY) || "{}"
        )}`
      : "",
  },
});
httpService.interceptors.response.use(undefined, (error) => {
  console.warn("error?.response?.status", error?.response?.status);
  if (error?.response?.status === 401) {
    message.error("401 unauthorized User login again");
    store.dispatch(logoutRequest());
    console.log(error?.response?.data?.msg);
    if (error?.response?.data?.msg === "User is not approved yet") {
      message.error("User is not approved yet");
    }
  }
  return Promise.reject(error);
});

const CancelToken = axios.CancelToken;
export { headers, resetHeaders, publicAgent, httpService, CancelToken };
