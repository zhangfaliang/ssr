import React, { Component } from "react";
import classnames from "classnames";
import styles from "./index.less";

class IconFont extends Component {
  render() {
    const { type } = this.props;
    const iconCls = classnames({
      [styles.iconfont]: true,
      [`icon-${type}`]: true
    });
    return <span className={iconCls} />;
  }
}
IconFont.defaultProps = {
  type: "weidenglutouxiang"
};
export default IconFont;
