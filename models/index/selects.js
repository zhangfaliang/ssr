import { createSelector } from "reselect";
import { get } from 'lodash';

export const selectState = () => state => state.count;

export const selectCount = () =>
  createSelector(
    selectState(),
    count => count
  );

export const selectLight = () =>
  createSelector(
    selectState(),
    count => count.light
  );

export const selectLastUpdate = () =>
  createSelector(
    selectState(),
    count => count.lastUpdate
  );
