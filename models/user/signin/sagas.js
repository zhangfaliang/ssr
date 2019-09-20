import {
  all,
  call,
  delay,
  put,
  take,
  takeLatest,
  select
} from "redux-saga/effects";
import es6promise from "es6-promise";
import { get } from "lodash";
import { sigIn } from "../../../services/user";
import { makeInputValus } from "./selects";
import { USER_SIGN_IN } from "./actionTypes";
import { setFeedbackModal } from "../../../models/global/actions";
import sjcl from "../../../utils/sjcl";
es6promise.polyfill();
let feedbackModalData = {
  footerText: "footerText",
  isOpen: false,
  showLogo: false,
  logo: "",
  shouldCloseOnOverlayClick: false,
  callbackWhenConfirm: () => {},
  feedbackModalClose: () => {},
  showCloseIcon: false,
  texts: []
}
function* signIn() {
  try {
    const inputValus = yield select(makeInputValus);
    const data = yield call(sigIn, {
      userName: get(inputValus, "phoneNumber", ""),
      password: JSON.stringify(
        sjcl.encrypt("password", get(inputValus, "password", ""))
      ),
      passwordAgin: JSON.stringify(
        sjcl.encrypt("passwordAgin", get(inputValus, "passwordAgin", ""))
      )
    });
    //setFeedbackModal
    if(get(data,'data.code',0)*1===0){
     const msg  = get(data,'data.data.msg');
     feedbackModalData={
       ...feedbackModalData,
       texts: [msg],
       isOpen: true,
     }
    }else{
      feedbackModalData={
        ...feedbackModalData,
        texts: [msg],
        isOpen: true,
      }
    }
    yield put(setFeedbackModal({
     ...feedbackModalData
    }))
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

export default [takeLatest(USER_SIGN_IN, signIn)];
