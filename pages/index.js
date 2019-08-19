import React from "react";
import { connect } from "react-redux";
import { loadData, startClock, tickClock } from "../models/index/actions";
import Page from "../containers/index";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));

    if (!store.getState().placeholderData) {
      //store.dispatch(loadData());
    }

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    const { parentProps } = this.props;
    return <Page {...this.props} title="Index Page" />;
  }
}

export default connect()(Index);
