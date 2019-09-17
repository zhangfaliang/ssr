import { SET_INPUTVALUE_DATAS } from "./actionTypes";

export const setInputValues = inputDatas => {
  return {
    type: SET_INPUTVALUE_DATAS,
    inputDatas
  };
};
