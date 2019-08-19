import React, { PureComponent } from "react";
import classnames from "classnames";
import IconFont from "../../components/iconFont";
import Seach from "./seach";
import HeaderTabs from "../headerTabs";

import styles from "./index.less";

class Header extends PureComponent {
  state = {
    listViewScrollTop: 0,
    ceilingFlag: null
  };
  static getDerivedStateFromProps(props, state) {
    const { onSetCeilingFlag, ceilingFlag } = props;
    if (props.listViewScrollTop !== state.listViewScrollTop) {
      const flag = props.listViewScrollTop > state.listViewScrollTop;
      if (flag !== state.ceilingFlag) {
        onSetCeilingFlag(flag);
      }
      return {
        listViewScrollTop: props.listViewScrollTop,
        ceilingFlag: flag
      };
    }
    return null;
  }
  render() {
    const { onLeftClick, isLogin, listViewScrollTop } = this.props;
    const headerCls = classnames({
      [styles.header]: true,
      [styles.ceiling]: this.state.ceilingFlag
    });
    return (
      <div className={headerCls}>
        <div className={styles.top}>
          <div className={styles.userInfo} onClick={onLeftClick}>
            <IconFont
              className={`${styles.mr40} ${styles.flod}`}
              type={"zhedie"}
              onClick={onLeftClick}
            />
            {isLogin ? (
              <IconFont type={"weidenglutouxiang"} onClick={onLeftClick} />
            ) : (
              <IconFont type={"weidenglutouxiang"} onClick={onLeftClick} />
            )}
          </div>
          <Seach />
          <IconFont className={styles.ml40} type={"liulanjilu"} />
        </div>
        <div className={styles.bottom}>
          <HeaderTabs />
        </div>
      </div>
    );
  }
}
Header.defaultProps = {
  onLeftClick: () => {
    console.log("11323");
  },
  isLogin: false,
  listViewScrollTop: 0
};
export default Header;
