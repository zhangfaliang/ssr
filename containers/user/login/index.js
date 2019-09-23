import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  UserInputGroup,
  UserInput,
  HintLabel
} from "../../../components/userInput";
import { setInputValues, login } from "../../../models/user/login/actions";
import {
  makeInputValus,
  makeIsVerifySuccess
} from "../../../models/user/login/selects";
import styles from "../index.less";
import { validPassword, valideIphone } from "../../../utils/validates";
import Button from "../../../components/button";

class Login extends Component {
  outputInputValues = dada => {
    this.props.onSetInputDatas(dada);
  };
  login = () => {
    this.props.onLogin();
  };
  render() {
    return (
      <div className={styles["input-wrap"]}>
        <UserInputGroup
          outputInputValues={this.outputInputValues}
          someOneOnBlur={this.someOneOnBlur}
        >
          <UserInput
            type="tel"
            placeholder="Your phone number"
            preFixPlaceholder="+86"
            verifyFn={valideIphone}
            name="phoneNumber"
            verifyErrorMessage="手机格式错误"
          />
          <UserInput
            type="password"
            verifyFn={validPassword}
            name="password"
            verifyErrorMessage={"密码必须是6-12位的数字和字面"}
            placeholder="Password"
          />
          <HintLabel />
        </UserInputGroup>
        <Button
          btnText={"立即登录"}
          clickCheckBtn={this.login}
          // disabled={isVerifySuccess || !checkboxChecked}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  inputValus: makeInputValus,
  isVerifySuccess: makeIsVerifySuccess
});
const mapDispatchToProps = dispatch => ({
  onSetInputDatas: inputDatas => {
    dispatch(setInputValues(inputDatas));
  },
  onLogin: () => {
    dispatch(login());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
