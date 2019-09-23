import { call, put, takeLatest, select } from "redux-saga/effects";
import es6promise from "es6-promise";
import { get } from "lodash";
import Router from "next/router";
import { changePWD } from "../../../services/user";
import { makeInputValus } from "./selects";
import { CHANGE_PWD } from "./actionTypes";
import { setFeedbackModal } from "../../../models/global/actions";
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
function* onChangePWD() {
  try {
    const inputValus = yield select(makeInputValus);
    const data = yield call(changePWD, {
      userName: get(inputValus, "phoneNumber", ""),
      password: JSON.stringify(
        sjcl.encrypt("password", get(inputValus, "password", ""))
      ),
      newPassword: JSON.stringify(
        sjcl.encrypt("newPassword", get(inputValus, "newPassword", ""))
      ),
      newPasswordAgin: JSON.stringify(
        sjcl.encrypt("newPasswordAgin", get(inputValus, "newPasswordAgin", ""))
      )
    });
    //setFeedbackModal
    if (get(data, "data.code", 0) * 1 === 0) {
      const msg = get(data, "data.data.msg");
      const verify = get(data, "data.data.verify", false);
      feedbackModalData = {
        ...feedbackModalData,
        texts: [msg],
        isOpen: true,
        footerText: verify ? "去登陆" : "OK",
        onRequestCloseUrlObj: {
          url: "/user/login/index",
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

export default [takeLatest(CHANGE_PWD, onChangePWD)];
