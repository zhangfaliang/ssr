import React from "react";
import { connect } from "react-redux";
import Page from "../../../containers/user/signin";

class Detail extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, pathname } = props.ctx;
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
