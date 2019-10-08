export const actionTypes = {
  SET_PAYMENT_TYPE: "/PAYMENT/SET_PAYMENT_TYPE",
  SET_INPUTVALUE_DATAS: "/PAYMENT/SET_INPUTVALUE_DATAS",
  ON_RECHARGE: "/PAYMENT/ON_RECHARGE",
  SET_RECHARGEHTML: "/PAYMENT/SET_RECHARGEHTML"
};

export function setPaymentType(paymentType) {
  return {
    type: actionTypes.SET_PAYMENT_TYPE,
    paymentType
  };
}
export const setInputValues = inputDatas => {
  return {
    type: actionTypes.SET_INPUTVALUE_DATAS,
    inputDatas
  };
};
export const onRecharge = (data) => {
  return {
    type: actionTypes.ON_RECHARGE,
    data
  };
};
export const setRechargeHtml = (htmlStr) => {
  return {
    type: actionTypes.SET_RECHARGEHTML,
    htmlStr
  };
};


