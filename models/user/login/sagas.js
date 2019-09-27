import {
  all,
  call,
  delay,
  put,
  take,
  takeLatest,
  select
} from "redux-saga/effects";
import es6promise from "es6-promise";
import { get } from "lodash";
import { login } from "../../../services/user";
import { makeInputValus } from "./selects";
import { USER_LOGIN_IN } from "./actionTypes";
import { setFeedbackModal, getUser } from "../../../models/global/actions";
import sjcl from "../../../utils/sjcl";
es6promise.polyfill();
let feedbackModalData = {
  footerText: "footerText",
  isOpen: false,
  showLogo: false,
  logo: "",
  shouldCloseOnOverlayClick: true,
  callbackWhenConfirm: () => {},
  feedbackModalClose: () => {},
  showCloseIcon: false,
  texts: [],
  onRequestCloseUrlObj: {
    url: "",
    routerFn: "",
    query: {},
    state: {}
  }
};
function* onLogin() {
  try {
    const inputValus = yield select(makeInputValus);
    const data = yield call(login, {
      userName: get(inputValus, "phoneNumber", ""),
      password: sjcl.encrypt("password", get(inputValus, "password", ""))
    });
    if (get(data, "data.code", 0) * 1 === 0) {
      yield put(getUser());
      const verify = get(data, "data.data.verify", false);
      const msg = get(data, "data.data.msg");
      feedbackModalData = {
        ...feedbackModalData,
        texts: [msg],
        isOpen: true,
        footerText: "Ok",
        onRequestCloseUrlObj: {
          url: "/",
          routerFn: "push"
        }
      };
    } else {
      feedbackModalData = {
        ...feedbackModalData,
        texts: [msg],
        isOpen: true,
        footerText: "OK"
      };
    }
    yield put(
      setFeedbackModal({
        ...feedbackModalData
      })
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export default [takeLatest(USER_LOGIN_IN, onLogin)];
