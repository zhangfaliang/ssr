import { actionTypes } from "./actions";

export const exampleInitialState = {
  paymentType: "zhifubao",
  inputDatas: {}
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

    default:
      return state;
  }
}

export default reducer;
