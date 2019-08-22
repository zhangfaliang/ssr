import {
  SET_LIST_VIEW_SCROOL_TOP,
  SET_HEADER_CEILING_FLAG,
  SET_PATH_NAME
} from "./actionTypes";

export const setListViewScrollTop = scrollTop => {
  return {
    type: SET_LIST_VIEW_SCROOL_TOP,
    scrollTop
  };
};

export const setCeilingFlag = ceilingFlag => {
  return {
    type: SET_HEADER_CEILING_FLAG,
    ceilingFlag
  };
};


export const setPathName = pathname => {
  return {
    type: SET_PATH_NAME,
    pathname
  };
};

