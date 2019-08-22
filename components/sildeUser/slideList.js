import React, { Component } from "react";
import classnames from "classnames";
import IconFont from "../iconFont";
import styles from "./index.less";

class SlideList extends Component {
  static COMPONENT_NAME = "SLIDE_LIST";

  render() {
    const { className, list } = this.props;
    const slideListCls = classnames(className, {
      [styles.slideList]: true
    });
    return (
      <ul className={slideListCls}>
        {list &&
          list.map((item, index) => {
            const { iconType, text } = item;
            return (
              <li className={styles.item}>
                <IconFont type={iconType} /> <span>{text}</span>
              </li>
            );
          })}
      </ul>
    );
  }
}
SlideList.defaultProps = {
  className: "",
  list: [
    {
      iconType: "shouye",
      text: "首页"
    },
    {
      iconType: "history",
      text: "浏览记录"
    },
    {
      iconType: "Downloadfolder",
      text: "我的下载"
    }
  ]
};
export default SlideList;
