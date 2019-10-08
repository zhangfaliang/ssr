import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { actionTypes } from "./actions";
import { recharge } from "../../services/recharge";

es6promise.polyfill();

function* onRecharge({ data }) {
  try {
    yield call(recharge, data);
  } catch (err) {
    console.log(err);
  }
}

export default [takeLatest(actionTypes.ON_RECHARGE, onRecharge)];
