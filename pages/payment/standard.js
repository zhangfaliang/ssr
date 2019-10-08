import React from "react";
import { connect } from "react-redux";
import Page from "../../containers/payment/standard";
import { getConfigIndexPage } from '../../models/global/actions';
class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer, pathname, apiData } = props.ctx;
    store.dispatch(getConfigIndexPage());
    return { isServer };
  }
  render() {
    return <Page {...this.props} title="Index Page" />;
  }
}

export default connect()(Index);



