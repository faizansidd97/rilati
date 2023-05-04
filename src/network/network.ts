import { LOGIN_ENDPOINT } from "../constant/EndPoints";
import { httpService } from "./axiosAgent";

export {};

//   import { privateAgent, publicAgent } from "../network/axiosAgent";

export const loginApi = (body: any) => {
  return httpService.post(`${LOGIN_ENDPOINT}`, { ...body });
};
