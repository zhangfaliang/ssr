import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { actionTypes, failure, loadDataSuccess, tickClock } from "./actions";
import { getIndexData } from "../../services/index";
es6promise.polyfill();

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga() {
  try {
    const data = yield call(getIndexData);
    yield put(loadDataSuccess(data.data));
  } catch (err) {
    yield put(failure(err));
  }
}

export default [
  call(runClockSaga),
  takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
];
