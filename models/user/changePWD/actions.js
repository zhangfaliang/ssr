import { SET_INPUTVALUE_DATAS, CHANGE_PWD } from "./actionTypes";

export const setInputValues = inputDatas => {
  return {
    type: SET_INPUTVALUE_DATAS,
    inputDatas
  };
};

export const changePWD = () => {
  return {
    type: CHANGE_PWD
  };
};
