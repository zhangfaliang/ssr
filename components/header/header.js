import React, { PureComponent } from "react";
import { Icon, Grid } from "antd-mobile";
import  IconFont from '../../components/iconFont';
import styles from "./index.less";

class Header extends PureComponent {
  render() {
    const { onLeftClick, isLogin } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.top}>
          <span>
            <Icon type={"ellipsis"} onClick={onLeftClick} />
            {isLogin ? (
               <IconFont type={"weidenglutouxiang"} onClick={onLeftClick} />
            ) : (
              <IconFont type={"weidenglutouxiang"} onClick={onLeftClick} />
            )}
          </span>
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
