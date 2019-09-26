import React from "react";
import { connect } from "react-redux";
import { startClock } from "../models/index/actions";
import { setPathName } from "../models/global/actions";

import Page from "../containers/index/index.js";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, pathname, apiData } = props.ctx;
    store.dispatch(setPathName(pathname));
    return { isServer };
  }
  render() {
    return <Page {...this.props} title="Index Page" />;
  }
}

export default connect()(Index);
