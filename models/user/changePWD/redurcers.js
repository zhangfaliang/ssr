import {
  SET_INPUTVALUE_DATAS
} from "./actionTypes";

export const exampleInitialState = {
  inputDatas: {},
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case SET_INPUTVALUE_DATAS:
      return {
        ...state,
        inputDatas: action.inputDatas
      };

    default:
      return state;
  }
}

export default reducer;
