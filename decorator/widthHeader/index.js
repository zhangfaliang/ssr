import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setListViewScrollTop } from "../../models/global/actions";
import { makeListViewScrollTop } from "../../models//global/selects";
import Header from "../../components/header";
import styles from "./index.less";

/**
 * 设置staticJson相关数据
 *
 * @param title 设置页面标题（后续根据国际化进行设置暂时先这样）
 */
export default (title, opts = {}) => WrappedComponent => {

  class widthHeader extends Component {
    render() {
      const { location, children } = this.props;
      return (
        <>
          <WrappedComponent {...this.props} />
        </>
      );
    }

    componentWillUnmount() {
    }
  }

  const mapStateToProps = createStructuredSelector({
    listViewScrollTop: makeListViewScrollTop
  });

  const mapDispatchToProps = dispatch => ({
    setScrollTop: scrollTop => dispatch(setListViewScrollTop(scrollTop))
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(widthHeader);
};
