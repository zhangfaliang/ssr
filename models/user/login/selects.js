import { createSelector } from "reselect";
import { get } from "lodash";

export const selectState = () => state => get(state, "login", {});

export const makeInputValus = createSelector(
  selectState(),
  signin => {
    const inputDatas = get(signin, "inputDatas");
    const res = {};
    Object.keys(inputDatas).forEach(key => {
      const currentInputValue = inputDatas[key];
      res[key] = get(currentInputValue, "value");
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
