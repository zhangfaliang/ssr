export const actionTypes = {
  SET_PAYMENT_TYPE: "/PAYMENT/SET_PAYMENT_TYPE",
  SET_INPUTVALUE_DATAS: "/PAYMENT/SET_INPUTVALUE_DATAS",
  ON_STANDARD_RECHARGE: "/PAYMENT/ON_STANDARD_RECHARGE",
  SET_RECHARGEHTML: "/PAYMENT/SET_RECHARGEHTML",
  ON_CUSTOM_RECHARGE: "/PAYMENT/ON_CUSTOM_RECHARGE",
  SET_PAYMENT_DATA: "/PAYMENT/SET_PAYMENT_DATA",
  POLLING_START: "/PAYMENT/POLLING_START",
  POLLING_STOP: "/PAYMENT/POLLING_STOP",
  SET_PAYMODELE: "/PAYMENT/SET_PAYMODELE",
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


export const pollingStop = () => {
  return {
    type: actionTypes.POLLING_STOP,
  };
};

export const pollingStart = () => {
  return {
    type: actionTypes.POLLING_START,
  };
};
export const setPayModule = (showMode) => {
  return {
    type: actionTypes.SET_PAYMODELE,
    showMode
  };
};
