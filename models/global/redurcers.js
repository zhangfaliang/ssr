import { SET_LIST_VIEW_SCROOL_TOP } from "./actionTypes";

export const exampleInitialState = {
  scrollTop: 0
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case SET_LIST_VIEW_SCROOL_TOP:
      return {
        ...state,
        scrollTop: action.scrollTop
      };
    default:
      return state;
  }
}

export default reducer;
