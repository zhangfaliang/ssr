import React, { Component } from "react";
import { isFunction } from 'lodash'
import Router from "next/router";
import classnames from "classnames";
import IconFont from "../iconFont";
import styles from "./index.less";
class DetailHeader extends Component {
  state = {
    listViewScrollTop: 0,
    ceilingFlag: null
  };
  static getDerivedStateFromProps(props, state) {
    const { onSetCeilingFlag, ceilingFlag } = props;
    if (props.listViewScrollTop !== state.listViewScrollTop) {
      const flag = props.listViewScrollTop > state.listViewScrollTop;
      if (flag !== state.ceilingFlag) {
        onSetCeilingFlag(flag);
      }
      return {
        listViewScrollTop: props.listViewScrollTop,
        ceilingFlag: flag
      };
    }
    return null;
  }
  onBack = () => {
    // isFunction(this.props.onBack) ? this.props.onBack() : Router.back();
    Router.back()

  };
  onShare = () => {
    console.log("onShare");
  };
  render() {
    const {
      leftIcon,
      rigthIcon,
      title,
      className,
      onSetCeilingFlag,
      ceilingFlag,
      rigthIconShow
    } = this.props;
    const headerCls = classnames(
      {
        [styles.detailHeder]: true,
        [styles.ceiling]: this.state.ceilingFlag
      },
      className || ""
    );
    return (
      <div className={headerCls}>
        <IconFont onClick={this.onBack} type={leftIcon} />
        <span>{title}</span>
        {rigthIconShow ? (
          <IconFont onClick={this.onShare} type={rigthIcon} />
        ) : (
            <span />
          )}
      </div>
    );
  }
}
DetailHeader.defaultProps = {
  leftIcon: "back",
  title: "飞人乔丹，三分线起跳，滑翔扣篮",
  rigthIcon: "fenxiang",
  rigthIconShow: true,
  onBack: () => { },
  onShare: () => { }
};

export default DetailHeader;
