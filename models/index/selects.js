import { createSelector } from "reselect";
import { get } from "lodash";

export const selectState = () => state => state.count;
export const selecIndexData = state => get(state, "indexData", {});

export const selectCount = () =>
  createSelector(
    selectState(),
    count => count
  );

export const selectplaceholderData = createSelector(
  selecIndexData,
  indexData => {
    return get(indexData, "placeholderData", {});
  }
);
