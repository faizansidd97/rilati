import { MAIL_REQUEST, MAIL_SUCCESS, MAIL_ERROR } from "../../constant/Types";
import { MailState } from "./Modules/mail";

const initialState: MailState = {
  loader: false,
  mail: [],
};

const mailReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case MAIL_REQUEST: {
      return Object.assign({}, state, {
        loader: true,
      });
    }

    case MAIL_SUCCESS: {
      console.log(action.payload);
      return Object.assign({}, state, {
        mail: action.payload,
        loader: false,
      });
    }

    case MAIL_ERROR: {
      return Object.assign({}, state, {
        loader: false,
      });
    }

    default:
      return state;
  }
};

export default mailReducers;
