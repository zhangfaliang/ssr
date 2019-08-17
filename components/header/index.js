import React, { PureComponent } from "react";
import IconFont from "../../components/iconFont";
import Seach from "./seach";
import HeaderTabs from '../headerTabs';

import styles from "./index.less";

class Header extends PureComponent {
  render() {
    const { onLeftClick, isLogin } = this.props;
    return (
      <div className={styles.header}>
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
        <div className={styles.bottom}><HeaderTabs/></div>
      </div>
    );
  }
}
Header.defaultProps = {
  onLeftClick: () => {console.log('11323')},
  isLogin: false
};
export default Header;
