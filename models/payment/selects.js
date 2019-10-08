import { createSelector } from "reselect";
import { get } from "lodash";

export const selecPayment = state => get(state, "payment", {});

export const makePaymentType = createSelector(
  selecPayment,
  payment => {
    return get(payment, "paymentType", "");
  }
);
