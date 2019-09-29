import React, { Component } from "react";
import classnames from "classnames";
import IconFont from "../iconFont";
import styles from "./index.less";

class SlideList extends Component {
  static COMPONENT_NAME = "SLIDE_LIST";

  render() {
    const { className, goToPageBtn } = this.props;
    const slideListCls = classnames(className, {
      [styles.slideList]: true
    });
    return (
      <ul className={slideListCls}>
        {goToPageBtn &&
          goToPageBtn.map((item, index) => {
            const { iconType, name } = item;
            return (
              <li key={index} className={styles.item}>
                <IconFont type={iconType} /> <span>{name}</span>
              </li>
            );
          })}
      </ul>
    );
  }
}
SlideList.defaultProps = {
  className: "",
  goToPageBtn: []
};
export default SlideList;
