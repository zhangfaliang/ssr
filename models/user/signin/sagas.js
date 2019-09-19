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
import { get } from "lodash";
import { sigIn } from "../../../services/user";
import { makeInputValus } from "./selects";
import { USER_SIGN_IN } from "./actionTypes";
import sjcl from "../../../utils/sjcl";
es6promise.polyfill();

function* signIn() {
  try {
    const inputValus = yield select(makeInputValus);
    console.log(inputValus,'--------')
    yield call(sigIn, {
      userName: get(inputValus, "phoneNumber", ""),
      password: sjcl.encrypt("password", get(inputValus, "password", "")),
      passwordAgin: sjcl.encrypt(
        "passwordAgin",
        get(inputValus, "passwordAgin", "")
      )
    });
  } catch (err) {
    console.log(err);
  }
}

export default [takeLatest(USER_SIGN_IN, signIn)];
