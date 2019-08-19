import { createSelector } from "reselect";
import { get } from "lodash";

export const selectState = () => state => get(state, "global", {});

export const makeListViewScrollTop = createSelector(
  selectState(),
  globalData => {
    return get(globalData, "scrollTop");
  }
);

export const makeCeilingFlag = createSelector(
  selectState(),
  globalData => {
    return get(globalData, "ceilingFlag");
  }
);
