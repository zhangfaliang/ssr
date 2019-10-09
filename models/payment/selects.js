import { createSelector } from "reselect";
import { get } from "lodash";

export const selecPayment = state => get(state, "payment", {});

export const makePaymentType = createSelector(
  selecPayment,
  payment => {
    return get(payment, "paymentType", "");
  }
);

export const makeIsVerifySuccess = createSelector(
  selecPayment,
  payment => {
    return get(payment, "inputDatas.isVerifySuccess", false);
  }
);

export const makePaymenyData = createSelector(
  selecPayment,
  payment => {
    return get(payment, "paymentData", {});
  }
);
