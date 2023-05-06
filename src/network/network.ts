import { LOGIN_ENDPOINT } from "../constant/EndPoints";
import { httpService } from "./axiosAgent";

export {};

//   import { privateAgent, publicAgent } from "../network/axiosAgent";

export const loginApi = (body: any) => {
  return httpService.post(`${LOGIN_ENDPOINT}`, { ...body });
};

export const getCareer = (body: any) => {
  return httpService.get(`${LOGIN_ENDPOINT}`, { ...body });
};
export const postCareer = (body: any) => {
  return httpService.post(`${LOGIN_ENDPOINT}`, { ...body });
};
export const updateCareer = (body: any) => {
  return httpService.patch(`${LOGIN_ENDPOINT}`, { ...body });
};
export const deleteCareer = (body: any) => {
  return httpService.delete(`${LOGIN_ENDPOINT}`, { ...body });
};
