import React, { Component } from "react";
import classnames from "classnames";
import styles from "./index.less";

class IconFont extends Component {
  render() {
    const { type, onClick, className } = this.props;
    const iconCls = classnames(
      {
        [styles.iconfont]: true,
        [styles[`icon-${type}`]]: true
      },
      className
    );
    return <span className={iconCls} onClick={onClick} />;
  }
}
IconFont.defaultProps = {
  type: "weidenglutouxiang",
  className: "",
  onClick: () => {}
};
export default IconFont;
