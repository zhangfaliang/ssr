import {
  SET_LIST_VIEW_SCROOL_TOP,
  SET_HEADER_CEILING_FLAG,
  SET_PATH_NAME,
  SET_TAB_KEY,
  SET_FEEDBACKMODAL
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
  console.log('pathname',pathname)
  return {
    type: SET_PATH_NAME,
    pathname
  };
};



export const setTabKey = params => {
  return {
    type: SET_TAB_KEY,
    params
  };
};

export const setFeedbackModal = feedbackModal => {
  return {
    type: SET_FEEDBACKMODAL,
    feedbackModal
  };
};

