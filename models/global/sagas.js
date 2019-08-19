import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import { setListViewScrollTop  } from "./actions";
import { SET_LIST_VIEW_SCROOL_TOP } from "./actionTypes";

es6promise.polyfill();

// function* runClockSaga() {
//   yield take(actionTypes.START_CLOCK);
//   while (true) {
//     yield put(tickClock(false));
//     yield delay(1000);
//   }
// }

function* loadDataSaga() {
  try {
    console.log(SET_LIST_VIEW_SCROOL_TOP,'---')
  } catch (err) {
    yield put(failure(err));
  }
}

export default [
//   call(runClockSaga),
  takeLatest(SET_LIST_VIEW_SCROOL_TOP, loadDataSaga)
];
