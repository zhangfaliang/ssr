import React, { PureComponent } from "react";
import IconFont from "../../components/iconFont";
import Seach from "./seach";
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
            />
            {isLogin ? (
              <IconFont type={"weidenglutouxiang"} />
            ) : (
              <IconFont type={"weidenglutouxiang"} />
            )}
          </div>
          <Seach />
          <IconFont className={styles.ml40} type={"liulanjilu"} />
        </div>
        <div className={styles.bottom}>bottom</div>
      </div>
    );
  }
}
Header.defaultProps = {
  onLeftClick: () => {},
  isLogin: false
};
export default Header;
