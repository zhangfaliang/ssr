import { createSelector } from "reselect";
import { get } from "lodash";

export const selectState = () => state => get(state, "signin", {});

export const makeInputValus = createSelector(
  selectState(),
  signin => {
    const inputDatas = get(signin, "inputDatas");
    let res = {};
    Object.keys(inputDatas).forEach(key => {
      const currentInputValue = inputDatas[key];
      res = get(currentInputValue, "value");
    });
    return res;
  }
);

export const makeIsVerifySuccess = createSelector(
  selectState(),
  signin => {
    return get(signin, "inputDatas.isVerifySuccess");
  }
);
