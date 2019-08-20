import React, { PureComponent } from "react";
import { isArray } from 'lodash';
import IconFont from '../../iconFont';
import classnames from "classnames";
import styles from "./index.less";

class SelfdomDes extends PureComponent {
  render() {
    const { leftText, rightIconData } = this.props;
    const selfdomImgCls = classnames({
      [styles.des]: true
    });
    return (
      <div className={selfdomImgCls}>
        <div>{leftText}</div>
        <div className={styles.iconWrap}>{isArray(rightIconData) ? rightIconData.map((item, index) => {
          const { iconType, num } = item;
          return <div className={styles.iconData}><IconFont type={iconType} /> <span className={styles.num}>{num}</span></div>
        }) : ''}</div>
      </div>
    );
  }
}
SelfdomDes.defaultProps = {
  leftText: '第一下小节 字母哥真NB',
  rightIconData: [{
    iconType: 'liuyan',
    num: '2000'
  }, {
    iconType: 'dianzan',
    num: '4545'
  },
    , {
    iconType: 'diandiandianshu',
    num: ''
  }]
};
export default SelfdomDes;
