import {
  all,
  call,
  delay,
  put,
  take,
  takeLatest,
  select
} from "redux-saga/effects";
import es6promise from "es6-promise";
import { sigIn } from "../../../services/user";
import { makeInputValus } from "./selects";
import { USER_SIGN_IN } from "./actionTypes";

es6promise.polyfill();

function* signIn() {
  try {
    const inputValus = yield select(makeInputValus);
    yield call(sigIn, inputValus);
  } catch (err) {
    yield put(failure(err));
  }
}

export default [takeLatest(USER_SIGN_IN, signIn)];
