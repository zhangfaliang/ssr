import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  setInputValues,
  changePWD
} from "../../../models/user/changePWD/actions";
import {
  makeInputValus,
  makeIsVerifySuccess
} from "../../../models/user/signin/selects";
import {
  UserInputGroup,
  UserInput,
  HintLabel
} from "../../../components/userInput";
import styles from "../index.less";
import { validPassword, valideIphone } from "../../../utils/validates";
import Button from "../../../components/button";

class Login extends Component {
  outputInputValues = dada => {
    this.props.onSetInputDatas(dada);
  };
  onSign = () => {
    this.props.onChangePWD();
  };
  render() {
    const { inputValus, isVerifySuccess } = this.props;
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
            name="userName"
            verifyErrorMessage="手机号格式错误"
          />
          <UserInput
            type="password"
            verifyFn={validPassword}
            verifyErrorMessage={"密码格式错误"}
            placeholder="oldPassword"
          />
          <UserInput
            verifyFn={validPassword}
            type="password"
            name="newPassword"
            compareName="password"
            verifyErrorMessage={"密码格式错误"}
            placeholder={"newPassword"}
          />
          <UserInput
            verifyFn={validPassword}
            type="password"
            name="newPasswordAgin"
            compareName="password"
            verifyErrorMessage={"密码格式错误"}
            placeholder={"newPasswordAgin"}
          />
          <HintLabel />
        </UserInputGroup>
        <Button
          btnText={"修改"}
          clickCheckBtn={this.onSign}
          disabled={false}
          // !isVerifySuccess
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
  onChangePWD: () => {
    dispatch(changePWD());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
