import { LOGIN_ENDPOINT } from "../constant/EndPoints";
import { CAREER_ENDPOINT, UNI_ENDPOINT } from "../constant/EndPoints";
import { httpService } from "./axiosAgent";

export {};

//   import { privateAgent, publicAgent } from "../network/axiosAgent";

export const loginApi = (body: any) => {
  return httpService.post(`${LOGIN_ENDPOINT}`, { ...body });
};

export const getCareerApi = (body: any) => {
  return httpService.get(`${CAREER_ENDPOINT}`, { ...body });
};
export const getCareerbyIdApi = (id: number, body: any) => {
  return httpService.get(`${CAREER_ENDPOINT}/${id}`, { ...body });
};
export const postCareerApi = (body: any) => {
  return httpService.post(`${CAREER_ENDPOINT}`, { ...body });
};
export const updateCareerApi = (id: string, body: any) => {
  return httpService.patch(`${CAREER_ENDPOINT}/${id}`, { ...body });
};
export const deleteCareerApi = (body: any) => {
  return httpService.delete(`${CAREER_ENDPOINT}`, { ...body });
};

export const getUniApi = (body: any) => {
  return httpService.get(`${UNI_ENDPOINT}`, { ...body });
};
export const postUniApi = (body: any) => {
  return httpService.post(`${UNI_ENDPOINT}`, { ...body });
};
export const updateUniApi = (body: any) => {
  return httpService.patch(`${UNI_ENDPOINT}`, { ...body });
};
export const deleteUniApi = (body: any) => {
  return httpService.delete(`${UNI_ENDPOINT}`, { ...body });
};
