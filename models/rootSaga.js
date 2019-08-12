import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
es6promise.polyfill();
import indexSagas from "./index/saga";

function* rootSaga() {
  yield all([...indexSagas]);
}
export default rootSaga;
