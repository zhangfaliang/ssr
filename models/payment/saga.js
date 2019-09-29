import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { actionTypes, failure, loadDataSuccess, tickClock } from "./actions";
es6promise.polyfill();



function* loadDataSaga() {
  try {
    yield put(loadDataSuccess(data.data));
  } catch (err) {
    yield put(failure(err));
  }
}

export default [
  // call(runClockSaga),
 
];
