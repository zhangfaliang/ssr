import {
  SET_LIST_VIEW_SCROOL_TOP,
  SET_HEADER_CEILING_FLAG,
  SET_PATH_NAME,
  SET_TAB_KEY,
  SET_FEEDBACKMODAL,
  SET_USER
} from "./actionTypes";

export const exampleInitialState = {
  scrollTop: 0,
  ceilingFlag: false,
  pathname: "index",
  tabKey: 0,
  feedbackModal: {
    footerText: "footerText",
    isOpen: false,
    showLogo: false,
    logo: "",
    shouldCloseOnOverlayClick: false,
    callbackWhenConfirm: () => {},
    feedbackModalClose: () => {},
    showCloseIcon: false,
    texts: [],
    userInfo: {}
  }
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case SET_LIST_VIEW_SCROOL_TOP:
      return {
        ...state,
        scrollTop: action.scrollTop
      };
    case SET_HEADER_CEILING_FLAG:
      return {
        ...state,
        ceilingFlag: action.ceilingFlag
      };
    case SET_PATH_NAME:
      return {
        ...state,
        pathname: action.pathname
      };

    case SET_TAB_KEY:
      return {
        ...state,
        tabKey: action.params.key
      };
    case SET_FEEDBACKMODAL:
      return {
        ...state,
        feedbackModal: {
          ...state.feedbackModal,
          ...action.feedbackModal
        }
      };
    case SET_USER:
      return {
        ...state,
        userInfo: action.userInfo
      };

    default:
      return state;
  }
}

export default reducer;
