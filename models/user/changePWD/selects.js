import { createSelector } from "reselect";
import { get } from "lodash";

export const selectState = () => state => get(state, "changePWD", {});

export const makeInputValus = createSelector(
  selectState(),
  changePWD => {
    const inputDatas = get(changePWD, "inputDatas");
    let res = {};
    Object.keys(inputDatas).forEach(key => {
      const currentInputValue = inputDatas[key];
      res[key] = get(currentInputValue, "value");
    });
    console.log(res);
    return res;
  }
);

export const makeIsVerifySuccess = createSelector(
  selectState(),
  changePWD => {
    return get(changePWD, "inputDatas.isVerifySuccess");
  }
);
