import { createSelector } from "reselect";
import { get } from "lodash";

export const selectState = () => state => get(state, "changePWD", {});

export const makeInputValus = createSelector(
  selectState(),
  changePWD => {
    const inputDatas = get(changePWD, "inputDatas");
    const processDatas = Object.keys(inputDatas).map(key => {
      const currentInputValue = inputDatas[key];
      return {
        [key]: get(currentInputValue, "value")
      };
    });
    return processDatas || {};
  }
);

export const makeIsVerifySuccess = createSelector(
  selectState(),
  changePWD => {
    return get(changePWD, "inputDatas.isVerifySuccess");
  }
);
