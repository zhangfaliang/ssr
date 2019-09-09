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
  login = () => {};
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

export default Login;
