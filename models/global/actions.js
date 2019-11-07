import {
  SET_LIST_VIEW_SCROOL_TOP,
  SET_HEADER_CEILING_FLAG,
  SET_PATH_NAME,
  SET_TAB_KEY,
  SET_FEEDBACKMODAL,
  SET_USER,
  GET_USER,
  INIT_PAGE,
  CLICK_SILD_BAR,
  CHAGE_USER_SLID,
  SET_CONFIG_INDEX_PAGE,
  GO_TO_RECHAGE,
  GET_CONFIG_INDEX_PAGE
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

export const getUser = () => {
  return {
    type: GET_USER
  };
};

export const setUser = userInfo => {
  return {
    type: SET_USER,
    userInfo
  };
};
export const initPage = () => {
  return {
    type: INIT_PAGE
  };
};
export const initClickBar = typeText => {
  return {
    type: CLICK_SILD_BAR,
    typeText
  };
};

export const changeUserSild = userSildFalg => {
  return {
    type: CHAGE_USER_SLID,
    userSildFalg
  };
};

export const getConfigIndexPage = () => {
  return {
    type: GET_CONFIG_INDEX_PAGE
  };
};
export const setConfigIndexPage = pageIndexConfig => {
  return {
    type: SET_CONFIG_INDEX_PAGE,
    pageIndexConfig
  };
};
export const goToRecharge = key => {
  return {
    type: GO_TO_RECHAGE,
    key
  };
};

