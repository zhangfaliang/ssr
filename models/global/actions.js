import { SET_LIST_VIEW_SCROOL_TOP } from "./actionTypes";

export const setListViewScrollTop = scrollTop => {
  return {
    type: SET_LIST_VIEW_SCROOL_TOP,
    scrollTop
  };
};
