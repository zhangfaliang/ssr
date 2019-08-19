import React, { PureComponent } from "react";
import classnames from "classnames";
import { get, isArray } from "lodash";
import styles from "./index.less";

class SelfdomTitle extends PureComponent {
  render() {
    const { preFixCls, leftLabel, rightLabel, title } = this.props;
    const selfdomCls = classnames({
      [styles[`${preFixCls || "default"}-title`]]: true
    });
    return (
      <div className={selfdomCls}>
        <div className={styles.left}>
          <div className={styles.top}>
            {isArray(leftLabel) &&
              leftLabel.map((item, index) => (
                <span className={styles.leftLabel} key={index}>
                  {item}
                </span>
              ))}
            <span className={styles.title}>{title}</span>
            {isArray(rightLabel) &&
              rightLabel.map((item, index) => (
                <span className={styles.rightLabel} key={index}>
                  {item}
                </span>
              ))}
          </div>
          <div className={styles.button}> button </div>
        </div>
        <div className={styles.right}> 2 </div>
      </div>
    );
  }
}
SelfdomTitle.defaultProps = {
  preFixCls: "default",
  title: "海贼王",
  leftLabel: ["冒险"],
  rightLabel: ["冒险", "奇幻"]
};
export default SelfdomTitle;
