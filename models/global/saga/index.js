import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import { get } from "lodash";
import {
  setUser,
  getUser,
  setFeedbackModal,
  changeUserSild,
  setConfigIndexPage
} from "./actions";
import {
  getUserInfo,
  getLogout,
  getIndexPageConfig
} from "../../services/user";
import {
  GET_USER,
  INIT_PAGE,
  CLICK_SILD_BAR,
  GET_CONFIG_INDEX_PAGE
} from "./actionTypes";
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
      yield put(changeUserSild(false));

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
function* requireConfigIndexPage() {
  const res = yield call(getIndexPageConfig);
  const indexConfig = {
    userSlidBtn: JSON.parse(get(res, "data.data.data.userSlidBtn", [])),
    userSetBtn: JSON.parse(get(res, "data.data.data.userSetBtn", [])),
    goToPageBtn: JSON.parse(get(res, "data.data.data.goToPageBtn", []))
  };
  yield put(setConfigIndexPage(indexConfig));
}

export default [
  takeLatest(GET_USER, getUserWorks),
  takeLatest(INIT_PAGE, initPage),
  takeLatest(CLICK_SILD_BAR, clickSildBar),
  takeLatest(GET_CONFIG_INDEX_PAGE, requireConfigIndexPage)
];
