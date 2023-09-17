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
    window.localStorage.getItem(Environment.LOCAL_STORAGE_KEY) ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AcmlsYXRpLmNvbSIsImZhbWlseV9uYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODM1NzU0MDYsImV4cCI6MTcxNTExMTQwNn0.AaDBbusetGy0_jAsAHGhvuryo1lgJQO7DOcMAa28kvE"
  );
}

const httpService = axios.create({
  baseURL: Environment.API_BASE_URL,
  headers: {
    ...headers,

    Authorization: authDetails
      ? `Bearer ${JSON.parse(
          window.localStorage.getItem(Environment.LOCAL_STORAGE_KEY) || "{adad}"
        )}`
      : "",
  },
});
httpService.interceptors.response.use(undefined, (error) => {
  if (error?.response?.status === 401) {
    message.error("401 unauthorized User login again");
    store.dispatch(logoutRequest());
    if (error?.response?.data?.msg === "User is not approved yet") {
      message.error("User is not approved yet");
    }
  }
  return Promise.reject(error);
});

const CancelToken = axios.CancelToken;
export { headers, resetHeaders, publicAgent, httpService, CancelToken };
