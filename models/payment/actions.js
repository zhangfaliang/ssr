export const actionTypes = {
  SET_PAYMENT_TYPE: "/PAYMENT/SET_PAYMENT_TYPE",
  SET_INPUTVALUE_DATAS: "/PAYMENT/SET_INPUTVALUE_DATAS",
  ON_STANDARD_RECHARGE: "/PAYMENT/ON_STANDARD_RECHARGE",
  SET_RECHARGEHTML: "/PAYMENT/SET_RECHARGEHTML",
  ON_CUSTOM_RECHARGE: "/PAYMENT/ON_CUSTOM_RECHARGE",
  SET_PAYMENT_DATA: "/PAYMENT/SET_PAYMENT_DATA",


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
export const onStandardRecharge = (data) => {
  return {
    type: actionTypes.ON_STANDARD_RECHARGE,
    data
  };
};
export const onCustomRecharge = (data) => {
  return {
    type: actionTypes.ON_CUSTOM_RECHARGE,
    data
  };
};
export const setRechargeHtml = (htmlStr) => {
  return {
    type: actionTypes.SET_RECHARGEHTML,
    htmlStr
  };
};

export const setPaymentData = (paymentData) => {
  return {
    type: actionTypes.SET_PAYMENT_DATA,
    paymentData
  };
};


