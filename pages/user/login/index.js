import React from "react";
import { connect } from "react-redux";
import { setPathName } from "../../../models/global/actions";
import Page from "../../../containers/user/login";

class Detail extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, pathname } = props.ctx;
    store.dispatch(setPathName(pathname));
    if (!store.getState().placeholderData) {
    }

    return { isServer };
  }

  componentDidMount() {}

  render() {
    return <Page {...this.props} title="Index Page" />;
  }
}

export default connect()(Detail);
