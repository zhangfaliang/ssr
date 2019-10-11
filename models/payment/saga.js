import {
  takeEvery,
  call,
  delay,
  put,
  take,
  takeLatest,
  fork,
  cancel,
  cancelled
} from "redux-saga/effects";
import es6promise from "es6-promise";
import "isomorphic-unfetch";
import { get } from "lodash";
import {
  actionTypes,
  setPaymentData,
  pollingStop,
  pollingStart,
  setPayModule
} from "./actions";
import {
  standardRecharge,
  customRecharge,
  orderQuery
} from "../../services/recharge";

es6promise.polyfill();
const toGetElementById = (id, value) => {
  console.log(id);
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
function* bgSync(greenpay_id, goodId, amount, payType) {
  try {
    while (true) {
      const result = yield call(orderQuery, {
        greenpay_id,
        goodId,
        amount,
        payType
      });
      const code = get(result, "data.data.code");
      if (code === 200) {
        yield put(setPayModule(false));
        yield put(pollingStop());
      }
      yield delay(1000);
    }
  } finally {
    if (yield cancelled()) console.log("Sync cancelled!");
  }
}

function* main(data) {
  // while (true) {
  // const data = yield takeEvery(actionTypes.POLLING_START);
  const { greenpay_id, goodId, amount, payType } = data || {};
  // 启动后台任务
  const bgSyncTask = yield fork(bgSync, greenpay_id, goodId, amount, payType);
  // 等待用户的停止操作
  yield take(actionTypes.POLLING_STOP);
  // 用户点击了停止，取消后台任务
  // 这会导致被 fork 的 bgSync 任务跳进它的 finally 区块
  yield cancel(bgSyncTask);
  // }
}
function* onCustomRecharge({ data }) {
  try {
    const res = yield call(customRecharge, data);
    yield put(setPaymentData(get(res, "data.data")));
    const { amount, greenpay_id, type } = get(res, "data.data", {});
    yield put({
      type: actionTypes.POLLING_START,
      greenpay_id,
      goodId: get(data, "goodId"),
      amount,
      payType: type
    });
  } catch (err) {
    console.log(err);
  }
}

export default [
  takeLatest(actionTypes.ON_STANDARD_RECHARGE, onStandardRecharge),
  takeLatest(actionTypes.ON_CUSTOM_RECHARGE, onCustomRecharge),
  takeEvery(actionTypes.POLLING_START, main)
  // call(main)
];
