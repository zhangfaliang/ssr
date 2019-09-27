import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import { get } from "lodash";
import { setUser, getUser } from "./actions";
import { getUserInfo } from "../../services/user";

import { GET_USER, INIT_PAGE, CLICK_SILD_BAR } from "./actionTypes";

es6promise.polyfill();

function* initPage() {
  // yield put(getUser());
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
  console.log(action);
}

export default [
  takeLatest(GET_USER, getUserWorks),
  takeLatest(INIT_PAGE, initPage),
  takeLatest(CLICK_SILD_BAR, clickSildBar)
];
