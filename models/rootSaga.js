import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
es6promise.polyfill();
import gloadSagas from "./global/sagas";
import indexSagas from "./index/saga";
import signInSagas from "./user/signin/sagas";
import loginSagas from "./user/login/sagas";
import changePwdSagas from "./user/changePWD/sagas";

function* rootSaga() {
  yield all([
    ...gloadSagas,
    ...indexSagas,
    ...signInSagas,
    ...loginSagas,
    ...changePwdSagas
  ]);
}
export default rootSaga;
