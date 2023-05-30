import { mediaUploadApi } from "src/network/network";
import { MEDIA_ERROR, MEDIA_REQUEST, MEDIA_SUCCESS } from "src/constant/Types";

export const uploadImage = (body: FormData) => (dispatch: any) => {
  return new Promise((resolve, rejects) => {
    dispatch({ type: MEDIA_REQUEST });
    mediaUploadApi(body)
      .then((res) => {
        const { data }: any = res;
        resolve(data);
        dispatch({ type: MEDIA_SUCCESS, payload: data });
      })
      .catch((err) => {
        rejects(err);
        dispatch({ type: MEDIA_ERROR });
      });
  });
};
