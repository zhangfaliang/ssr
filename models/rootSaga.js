import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
es6promise.polyfill();
import indexSagas from "./index/saga";
import signInSagas from "./user/signin/sagas";
import loginSagas from "./user/login/sagas";

function* rootSaga() {
  yield all([...indexSagas, ...signInSagas, ...loginSagas]);
}
export default rootSaga;
