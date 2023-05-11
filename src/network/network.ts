import { CAT_ENDPOINT, LOGIN_ENDPOINT } from "../constant/EndPoints";
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
export const deleteCareerApi = (id: any) => {
  return httpService.delete(`${CAREER_ENDPOINT}/${id}`);
};

export const getCategoryApi = (body: any) => {
  return httpService.get(`${CAT_ENDPOINT}`, { ...body });
};
export const getCategorybyIdApi = (id: number, body: any) => {
  return httpService.get(`${CAT_ENDPOINT}/${id}`, { ...body });
};
export const postCategoryApi = (body: any) => {
  return httpService.post(`${CAT_ENDPOINT}`, { ...body });
};
export const updateCategoryApi = (id: string, body: any) => {
  return httpService.patch(`${CAT_ENDPOINT}/${id}`, { ...body });
};
export const deleteCategoryApi = (id: any) => {
  return httpService.delete(`${CAT_ENDPOINT}/${id}`);
};

export const getUniApi = (body: any) => {
  return httpService.get(`${UNI_ENDPOINT}`, { ...body });
};
export const getUnibyIdApi = (id: number) => {
  return httpService.get(`${UNI_ENDPOINT}/${id}`);
};
export const postUniApi = (body: any) => {
  return httpService.post(`${UNI_ENDPOINT}`, { ...body });
};
export const updateUniApi = (id: string, body: any) => {
  return httpService.patch(`${UNI_ENDPOINT}/${id}`, { ...body });
};
export const deleteUniApi = (id: string) => {
  return httpService.delete(`${UNI_ENDPOINT}/${id}`);
};

export const mediaUploadApi = (body: any) => {
  return httpService.post(`/media/file`, body);
};
