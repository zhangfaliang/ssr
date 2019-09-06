import React from "react";
import { connect } from "react-redux";
import { loadData, startClock, tickClock } from "../models/index/actions";
import { setPathName } from "../models/global/actions";

import Page from "../containers/index/index.js";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, pathname, apiData } = props.ctx;
    store.dispatch(setPathName(pathname));
    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return <Page {...this.props} title="Index Page" />;
  }
}

export default connect()(Index);
