import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import { get } from "lodash";
import { setUser, getUser, setFeedbackModal } from "./actions";
import { getUserInfo, getLogout } from "../../services/user";
import { GET_USER, INIT_PAGE, CLICK_SILD_BAR } from "./actionTypes";
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

function* initPage() {
  yield put(getUser());
}
function* getUserWorks() {
  try {
    const res = yield call(getUserInfo);
    if (get(res, "data.data.verify")) {
      const userInfo = get(res, "data.data.userInfo");
      yield put(setUser({ ...userInfo, isLogin: true }));
    } else {
      yield put(setUser({ isLogin: false }));
    }
  } catch (e) {
    console.log(e);
  }
}
function* clickSildBar(action) {
  try {
    const res = yield call(getLogout);
    if (get(res, "data.code", 0) * 1 === 0) {
      yield put(getUser());
      const msg = get(res, "data.data.msg");
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
  } catch (e) {}
}

export default [
  takeLatest(GET_USER, getUserWorks),
  takeLatest(INIT_PAGE, initPage),
  takeLatest(CLICK_SILD_BAR, clickSildBar)
];
