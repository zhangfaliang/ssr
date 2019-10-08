export const actionTypes = {
  SET_PAYMENT_TYPE: "/PAYMENT/SET_PAYMENT_TYPE",
  SET_INPUTVALUE_DATAS: "/PAYMENT/SET_INPUTVALUE_DATAS"
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
