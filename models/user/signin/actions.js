import { SET_INPUTVALUE_DATAS, USER_SIGN_IN } from "./actionTypes";

export const setInputValues = inputDatas => {
  return {
    type: SET_INPUTVALUE_DATAS,
    inputDatas
  };
};

export const signIn = () => {
  return {
    type: USER_SIGN_IN
  };
};
