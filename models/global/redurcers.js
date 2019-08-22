import {
  SET_LIST_VIEW_SCROOL_TOP,
  SET_HEADER_CEILING_FLAG,
  SET_PATH_NAME
} from "./actionTypes";

export const exampleInitialState = {
  scrollTop: 0,
  ceilingFlag: false,
  pathname:'index'
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
    default:
      return state;
  }
}

export default reducer;
