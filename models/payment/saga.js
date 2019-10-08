import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { get } from "lodash";
import { actionTypes, setRechargeHtml } from "./actions";
import { recharge } from "../../services/recharge";

es6promise.polyfill();

function* onRecharge({ data }) {
  try {
    const res = yield call(recharge, data);
    yield put(setRechargeHtml(get(res, "data.data")));
  } catch (err) {
    console.log(err);
  }
}

export default [takeLatest(actionTypes.ON_RECHARGE, onRecharge)];
