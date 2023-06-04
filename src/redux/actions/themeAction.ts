import { THEME_REQUEST } from "src/constant/Types";

export const themeSwitcher = (flag?: boolean) => (dispatch: any) => {
  return new Promise((resolve, rejects) => {
    dispatch({ type: THEME_REQUEST, payload: flag });
  });
};
