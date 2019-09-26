import React from "react";
import { connect } from "react-redux";
import Page from "../containers/index/index.js";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, pathname, apiData } = props.ctx;
    return { isServer };
  }
  render() {
    return <Page {...this.props} title="Index Page" />;
  }
}

export default connect()(Index);
