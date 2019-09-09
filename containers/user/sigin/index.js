import React, { Component } from "react";
import {
  UserInputGroup,
  UserInput,
  HintLabel
} from "../../../components/userInput";
class Login extends Component {
  outputInputValues = () => {};
  someOneOnBlur = () => {};
  render() {
    return (
      <UserInputGroup
        outputInputValues={this.outputInputValues}
        someOneOnBlur={this.someOneOnBlur}
      >
        <UserInput
          type="tel"
          placeholder="Your phone number"
          preFixPlaceholder="+86"
          verifyFn={value => {
            return value == "1";
          }}
          name="phoneNumber"
          verifyErrorMessage="Your phone number error"
        />
        <UserInput
          type="password"
          verifyFn={value => {
            return value == "1";
          }}
          name="password"
          verifyErrorMessage={"密码错误"}
          placeholder="Password"
        />
        <UserInput
          verifyFn={value => {
            return value == "1";
          }}
          name="passwordAgin"
          verifyErrorMessage={"密码错误"}
          placeholder={"Password"}
        />
        <HintLabel />
      </UserInputGroup>
    );
  }
}

export default Login;
