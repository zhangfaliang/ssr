import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { get } from "lodash";
import { actionTypes, setRechargeHtml, setPaymentData } from "./actions";
import { standardRecharge, customRecharge } from "../../services/recharge";

es6promise.polyfill();
const toGetElementById = (id, value) => {
  console.log(id)
  document.getElementById(id).value = value;
};
function* onStandardRecharge({ data }) {
  try {
    const res = yield call(standardRecharge, data);
    const {
      goodname,
      type,
      key,
      notifyurl,
      returnurl,
      ordernum,
      orderuid,
      amount,
      account,
      mode,
      uid
    } = get(res, "data.data");
    // yield put(setPaymentData(get(res, "data.data")));
    toGetElementById("order_goodname", goodname);
    toGetElementById("order_type", type);
    toGetElementById("order_key", key);
    toGetElementById("order_notifyurl", notifyurl);
    toGetElementById("order_returnurl", returnurl);
    toGetElementById("order_ordernum", ordernum);
    toGetElementById("order_orderuid", orderuid);
    toGetElementById("order_amount", amount);
    toGetElementById("order_account", account);
    toGetElementById("order_mode", mode);
    toGetElementById("order_uid", uid);
    document.getElementById("btnRechargeSend").click();
  } catch (err) {
    console.log(err);
  }
}
function* onCustomRecharge({ data }) {
  try {
    const res = yield call(standardRecharge, data);
    yield put(setRechargeHtml(get(res, "data.data")));
  } catch (err) {
    console.log(err);
  }
}

export default [
  takeLatest(actionTypes.ON_STANDARD_RECHARGE, onStandardRecharge),
  takeLatest(actionTypes.ON_CUSTOM_RECHARGE, onCustomRecharge)
];
