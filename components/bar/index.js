import React, { Component } from "react";
import classnames from "classnames";
import IconFont from "../iconFont";
import styles from "./index.less";
class Bar extends Component {
  render() {
    const { onClickBar, icontType, className, barText } = this.props;
    const barCls = classnames(className, {
      [styles.bar]: true
    });
    return (
      <div className={barCls} onClick={onClickBar.bind(this, barText)}>
        <IconFont className={className} type={icontType} />
        <span>{barText}</span>
      </div>
    );
  }
}
Bar.defaultProps = {
  onClickBar: () => {},
  icontType: "shouye",
  className: "",
  barText: "首页"
};
export default Bar;
