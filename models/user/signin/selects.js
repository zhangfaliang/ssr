import { createSelector } from "reselect";
import { get } from "lodash";

export const selectState = () => state => get(state, "signin", {});

export const makeInputValus = createSelector(
  selectState(),
  signin => {
    const inputDatas = get(signin, "inputDatas");
    const processDatas = Object.keys(inputDatas).map(key => {
      const currentInputValue = inputDatas[key];
      return {
        [key]: get(currentInputValue, "value")
      };
    });
    return get(processDatas,'0',{});
  }
);

export const makeIsVerifySuccess = createSelector(
  selectState(),
  signin => {
    return get(signin, "inputDatas.isVerifySuccess");
  }
);
