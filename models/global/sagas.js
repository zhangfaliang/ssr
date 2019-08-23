import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import { setListViewScrollTop } from "./actions";
import { SET_LIST_VIEW_SCROOL_TOP, SET_TAB_KEY } from "./actionTypes";

es6promise.polyfill();

function* goTarget(action) {
  debugger

  console.log(action,'----------')
}

function* loadDataSaga() {
  try {
    console.log(SET_LIST_VIEW_SCROOL_TOP, "---");
  } catch (err) {
    yield put(failure(err));
  }
}

export default [
  //   call(runClockSaga),
  takeLatest(SET_LIST_VIEW_SCROOL_TOP, loadDataSaga),
  takeLatest(SET_TAB_KEY, goTarget),
  
];
