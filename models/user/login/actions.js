import { SET_INPUTVALUE_DATAS, USER_LOGIN_IN } from "./actionTypes";

export const setInputValues = inputDatas => {
  return {
    type: SET_INPUTVALUE_DATAS,
    inputDatas
  };
};

export const login = () => {
  return {
    type: USER_LOGIN_IN
  };
};
