import React, { Component } from "react";
import classnames from "classnames";
import IconFont from "../iconFont";
import styles from "./index.less";

class DetailFooter extends Component {
  render() {
    const { leftData, rightData, centerDate } = this.props;
    return (
      <div className={styles.detailFooter}>
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
