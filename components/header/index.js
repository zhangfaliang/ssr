import React, { PureComponent } from "react";
import classnames from "classnames";
import IconFont from "../../components/iconFont";
import Seach from "./seach";
import HeaderTabs from "../headerTabs";

import styles from "./index.less";

class Header extends PureComponent {
  static COMPONENT_NAME = "HEADER";
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
    const {
      onLeftClick,
      isLogin,
      listViewScrollTop,
      onChangeTab,
      onTabClick,
      onLogin,
      tabs
    } = this.props;
    const headerCls = classnames({
      [styles.header]: true,
      [styles.ceiling]: this.state.ceilingFlag
    });
    return (
      <div className={headerCls}>
        <div className={styles.top}>
          <div
            className={styles.userInfo}
            onClick={isLogin ? onLeftClick : onLogin}
          >
            <IconFont
              className={`${styles.mr40} ${styles.flod}`}
              type={"zhedie"}
              onClick={isLogin ? onLeftClick : onLogin}
            />
            {isLogin ? (
              <IconFont type={"weidenglutouxiang"} onClick={onLeftClick} />
            ) : (
              <IconFont type={"weidenglutouxiang"} onClick={onLogin} />
            )}
          </div>
          <Seach />
          <IconFont className={styles.ml40} type={"liulanjilu"} />
        </div>
        <div className={styles.bottom}>
          <HeaderTabs
            tabs={tabs}
            onChange={onChangeTab}
            onTabClick={onTabClick}
          />
        </div>
      </div>
    );
  }
}
Header.defaultProps = {
  onLeftClick: () => {
    console.log("11323");
  },
  onChangeTab: () => {},
  onTabClick: () => {},
  onLogin: () => {},
  isLogin: false,
  listViewScrollTop: 0
};
export default Header;
