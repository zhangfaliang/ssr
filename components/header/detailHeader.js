import React, { Component } from "react";
import Router from "next/router";
import classnames from "classnames";
import IconFont from "../iconFont";
import styles from "./index.less";

class DetailHeader extends Component {
  onBack = () => {
    Router.back();
  };
  onShare = () => {
    console.log('onShare');
  };
  render() {
    const { leftIcon, rigthIcon, title, className } = this.props;
    const headerCls = classnames(className || "", {
      [styles.detailHeder]: true
    });
    return (
      <div className={headerCls}>
        <IconFont onClick={this.onBack} type={leftIcon} />
        <span>{title}</span>
        <IconFont onClick={this.onShare} type={rigthIcon} />
      </div>
    );
  }
}
DetailHeader.defaultProps = {
  leftIcon: "back",
  title: "飞人乔丹，三分线起跳，滑翔扣篮",
  rigthIcon: "fenxiang",
  onBack: () => {},
  onShare: () => {}
};

export default DetailHeader;
