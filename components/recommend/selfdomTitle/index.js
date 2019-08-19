import React, { PureComponent } from "react";
import { Button } from 'antd-mobile'
import classnames from "classnames";
import { get, isArray } from "lodash";
import styles from "./index.less";
import IconFont from '../../../components/iconFont'

class SelfdomTitle extends PureComponent {
  render() {
    const { preFixCls, leftLabel, rightLabel, title, iconType } = this.props;
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
          <div className={styles.buttom}>
            <IconFont className={styles[`${iconType}`]} type={iconType}></IconFont>
            <span className={styles[`${iconType}`]}>超级火爆</span>
          </div>
        </div>
        <div className={styles.right}> <Button type="ghost" size="small" inline>关注</Button> </div>
      </div>
    );
  }
}
SelfdomTitle.defaultProps = {
  preFixCls: "default",
  title: "海贼王",
  leftLabel: ["冒险"],
  rightLabel: ["冒险", "奇幻"],
  iconType: 'fire'
};
export default SelfdomTitle;
