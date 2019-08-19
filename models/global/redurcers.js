import {
  SET_LIST_VIEW_SCROOL_TOP,
  SET_HEADER_CEILING_FLAG
} from "./actionTypes";

export const exampleInitialState = {
  scrollTop: 0,
  ceilingFlag: false
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
    default:
      return state;
  }
}

export default reducer;
