import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setInputValues } from "../../../models/user/signin/actions";
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
  someOneOnBlur = () => {};
  onSign = () => {};
  render() {
    const { inputValus, isVerifySuccess } = this.props;
    console.log(inputValus, isVerifySuccess);
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
            verifyErrorMessage="手机号格式错误"
          />
          <UserInput
            type="password"
            verifyFn={validPassword}
            name="password"
            compareName="password"
            verifyErrorMessage={"密码格式错误"}
            placeholder="Password"
          />
          <UserInput
            verifyFn={validPassword}
            type="password"
            name="passwordAgin"
            compareName="password"
            verifyErrorMessage={"密码格式错误"}
            placeholder={"Password"}
          />
          <HintLabel />
        </UserInputGroup>
        <Button
          btnText={"立即注册"}
          clickCheckBtn={this.onSign}
          disabled={!isVerifySuccess}
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
