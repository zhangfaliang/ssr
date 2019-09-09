import React, { Component } from "react";
import {
  UserInputGroup,
  UserInput,
  HintLabel
} from "../../../components/userInput";
import styles from "../index.less";
import { validPassword, valideIphone } from "../../../utils/validates";
import Button from "../../../components/button";

class Login extends Component {
  outputInputValues = () => {};
  someOneOnBlur = () => {};
  onSign = () => {};
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
            verifyErrorMessage="Your phone number error"
          />
          <UserInput
            type="password"
            verifyFn={validPassword}
            name="password"
            verifyErrorMessage={"密码错误"}
            placeholder="Password"
          />
          <UserInput
            verifyFn={validPassword}
            name="passwordAgin"
            verifyErrorMessage={"密码错误"}
            placeholder={"Password"}
          />
          <HintLabel />
        </UserInputGroup>
        <Button
          btnText={"立即注册"}
          clickCheckBtn={this.onSign}
          // disabled={isVerifySuccess || !checkboxChecked}
        />
      </div>
    );
  }
}

export default Login;
