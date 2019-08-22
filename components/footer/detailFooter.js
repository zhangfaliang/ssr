import React, { Component } from "react";
import classnames from "classnames";
import IconFont from "../iconFont";
import styles from "./index.less";

class DetailFooter extends Component {
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
  render() {
    const { leftData, rightData, centerDate } = this.props;
    const footerCls = classnames({
      [styles.detailFooter]: true,
      [styles.ceiling]: this.state.ceilingFlag
    });
    return (
      <div className={footerCls}>
        <div>
          {leftData.iconType ? <IconFont type={leftData.iconType} /> : ""}
          {leftData.text ? <span>{leftData.text}</span> : ""}
        </div>
        <div>
          {centerDate.iconType ? <IconFont type={centerDate.iconType} /> : ""}
          {centerDate.text ? <span>{centerDate.text}</span> : ""}
        </div>
        <div>
          {rightData.text ? <span>{rightData.text}</span> : ""}
          {rightData.iconType ? <IconFont type={rightData.iconType} /> : ""}
        </div>
      </div>
    );
  }
}
DetailFooter.defaultProps = {
  leftData: {
    iconType: "back",
    text: "上一届"
  },
  centerDate: {
    text: "第八届"
  },
  rightData: {
    iconType: "close",
    text: "下一届"
  }
};
export default DetailFooter;
