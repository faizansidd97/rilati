import { mediaUploadApi } from "src/network/network";
import { MAIL_ERROR, MAIL_REQUEST, MAIL_SUCCESS } from "src/constant/Types";
import { httpService } from "src/network/axiosAgent";

export const senMail = (body: any) => (dispatch: any) => {
  return new Promise((resolve, rejects) => {
    dispatch({ type: MAIL_REQUEST });
    httpService
      .post(`/send-mail`, body)
      .then((res) => {
        const { data }: any = res;
        resolve(data);
        dispatch({ type: MAIL_SUCCESS });
      })
      .catch((err) => {
        rejects(err);
        dispatch({ type: MAIL_ERROR });
      });
  });
};

export const getMails = () => (dispatch: any) => {
  return new Promise((resolve, rejects) => {
    dispatch({ type: MAIL_REQUEST });
    httpService
      .get(`/send-mail`)
      .then((res) => {
        const {
          data: { data },
        }: any = res;
        console.log("data", data);
        resolve(data);
        dispatch({ type: MAIL_SUCCESS, payload: data });
      })
      .catch((err) => {
        rejects(err);
        dispatch({ type: MAIL_ERROR });
      });
  });
};
