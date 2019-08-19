import { combineReducers } from "redux";
import global from './global/redurcers';
import indexData from "./index/redurces";

export const exampleInitialState = {
  indexData: {
    count: 0,
    error: false,
    lastUpdate: 0,
    light: false,
    placeholderData: null
  }
};

export default combineReducers({
  global,
  indexData
});
