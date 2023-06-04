import {
  deleteCategoryApi,
  getCategorybyIdApi,
  postCategoryApi,
  updateCategoryApi,
} from "src/network/network";
import {
  CATEGORY_BYID_SUCCESS,
  CATEGORY_ERROR,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
} from "src/constant/Types";
import { httpService } from "src/network/axiosAgent";

export const getCategory =
  (page = 1, take = 10, name?: string, type?: string) =>
  (dispatch: any) => {
    dispatch({ type: CATEGORY_REQUEST });
    httpService
      .get(
        `/categories?page=${page}&take=${take}${name ? `&name=${name}` : ""}${
          type ? `&type=${type}` : ""
        }`
      )
      .then((res) => {
        const {
          data: { data },
        }: any = res;

        dispatch({ type: CATEGORY_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: CATEGORY_ERROR });
      });
  };
export const getCategoryById = (id: any, param?: any) => (dispatch: any) => {
  dispatch({ type: CATEGORY_REQUEST });
  getCategorybyIdApi(id, param)
    .then((res) => {
      const {
        data: { data },
      }: any = res;

      dispatch({ type: CATEGORY_BYID_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: CATEGORY_ERROR });
    });
};
export const postCategory = (body: any) => (dispatch: any) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: CATEGORY_REQUEST, payload: body });
    postCategoryApi(body)
      .then((res) => {
        const {
          data: { data },
        }: any = res;
        resolve(data);
        dispatch({ type: CATEGORY_SUCCESS, payload: data });
      })
      .catch((err) => {
        reject(err);
        dispatch({ type: CATEGORY_ERROR });
      });
  });
};
export const updateCategory = (id: any, body: any) => (dispatch: any) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: CATEGORY_REQUEST, payload: body });
    updateCategoryApi(id, body)
      .then((res) => {
        const {
          data: { data },
        }: any = res;
        resolve(data);
        dispatch({ type: CATEGORY_SUCCESS });
      })
      .catch((err) => {
        reject(err);
        dispatch({ type: CATEGORY_ERROR });
      });
  });
};
export const deleteCategory = (id: any) => (dispatch: any) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: CATEGORY_REQUEST });
    deleteCategoryApi(id)
      .then((res) => {
        const {
          data: { data },
        }: any = res;
        resolve(data);

        dispatch({ type: CATEGORY_SUCCESS });
      })
      .catch((err) => {
        reject(err);
        dispatch({ type: CATEGORY_ERROR });
      });
  });
};
