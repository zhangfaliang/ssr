import { combineReducers } from "redux";
import global from "./global/redurcers";
import indexData from "./index/redurces";
import signin from "./user/signin/redurcers";
import login from "./user/login/redurcers";
import changePWD from "./user/changePWD/redurcers";

export const exampleInitialState = {
  indexData: {
    count: 0,
    error: false,
    lastUpdate: 0,
    light: false,
    placeholderData: null,
    signin: {},
    login: {},
    changePWD: {}
  }
};

export default combineReducers({
  global,
  indexData,
  signin,
  login
});
