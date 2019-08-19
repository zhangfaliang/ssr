import React, { PureComponent } from "react";
import { Button } from 'antd-mobile'
import classnames from "classnames";
import { get, isArray } from "lodash";
import styles from "./index.less";
import IconFont from '../../../components/iconFont'

class SelfdomTitle extends PureComponent {
  render() {
    const { preFixCls, leftLabel, rightLabel, title, leftIconType, des, rightText, righIconType, rightBtnText } = this.props;
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
            {leftIconType ? <IconFont className={styles[`${leftIconType}`]} type={leftIconType}></IconFont> : ''}
            <span className={styles[`${leftIconType}`]}>{des}</span>
          </div>
        </div>
        <div className={styles.right}>
          {rightBtnText ? <Button type="ghost" size="small" inline>{rightBtnText}</Button> : ''}
          {rightText ? <span className={styles[`${righIconType}`]} >{rightText}</span> : ""}
          {righIconType ? <IconFont className={styles[`${righIconType}`]} type={righIconType}></IconFont> : ""}


        </div>
      </div>
    );
  }
}
SelfdomTitle.defaultProps = {
  preFixCls: "default",
  title: "海贼王",
  leftLabel: [],
  rightLabel: [],
  leftIconType: '',
  des: '',
  rightText: '',
  righIconType: '',
  rightBtnText: ''
};
export default SelfdomTitle;
