import { actionTypes } from "./actions";

export const exampleInitialState = {
  paymentType: "zhifubao",
  inputDatas: {},
  htmlStr: "",
  paymentData: {},
  showMode: false
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.SET_PAYMENT_TYPE:
      return {
        ...state,
        paymentType: action.paymentType
      };
    case actionTypes.SET_INPUTVALUE_DATAS:
      return {
        ...state,
        inputDatas: action.inputDatas
      };
    case actionTypes.SET_RECHARGEHTML:
      return {
        ...state,
        inputDatas: action.htmlStr
      };
    case actionTypes.SET_PAYMENT_DATA:
      return {
        ...state,
        paymentData: action.paymentData,
        showMode: true
      };
    case actionTypes.SET_PAYMODELE:
      return {
        ...state,
        showMode: action.showMode,
      };

    default:
      return state;
  }
}

export default reducer;
