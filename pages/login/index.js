import React, { Component } from "react";
import Page from "../../containers/login";
class Login extends Component {
  render() {
    return <Page {...this.props}/>;
  }
}

export default Login;
