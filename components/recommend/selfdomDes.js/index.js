import React, { PureComponent } from "react";
import { get } from "lodash";
import { isArray } from "lodash";
import classnames from "classnames";
import IconFont from "../../iconFont";

import styles from "./index.less";

class SelfdomDes extends PureComponent {
  state = {};
  onIconClick = iconType => {
    this.setState({
      [iconType]:
        get(this.state, iconType) === undefined
          ? true
          : !get(this.state, iconType),
      iconTypeText: iconType
    });
  };
  render() {
    const { leftText, rightIconData } = this.props;
    const { iconTypeText } = this.state;
    const selfdomImgCls = classnames({
      [styles.des]: true
    });
    return (
      <div className={selfdomImgCls}>
        <div>{leftText}</div>
        <div className={styles.iconWrap}>
          {isArray(rightIconData)
            ? rightIconData.map((item, index) => {
                const { iconType, num } = item;
                const activeCls = classnames({
                  [styles.iconData]: true,
                  [styles.active]:
                    iconTypeText === iconType
                      ? get(this.state, iconType)
                      : false
                });
                return (
                  <div
                    key={index}
                    onClick={() => this.onIconClick(iconType)}
                    className={activeCls}
                  >
                    <IconFont className={styles[iconType]} type={iconType} />{" "}
                    <span className={`${styles.num} ${styles[iconType]}`}>
                      {num}
                    </span>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}
SelfdomDes.defaultProps = {
  leftText: "第一下小节 字母哥真NB",
  rightIconData: [
    {
      iconType: "liuyan",
      num: "2000"
    },
    {
      iconType: "dianzan",
      num: "4545"
    },
    ,
    {
      iconType: "diandiandianshu",
      num: ""
    }
  ]
};
export default SelfdomDes;
