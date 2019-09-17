import {
  SET_LIST_VIEW_SCROOL_TOP,
  SET_HEADER_CEILING_FLAG,
  SET_PATH_NAME,
  SET_TAB_KEY
} from "./actionTypes";

export const exampleInitialState = {
  scrollTop: 0,
  ceilingFlag: false,
  pathname: "index",
  tabKey: 0
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

    default:
      return state;
  }
}

export default reducer;
