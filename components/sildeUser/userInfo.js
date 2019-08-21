import React, { Component } from "react";
import styles from "./index.less";

class UserInfo extends Component {
  render() {
    const { userName, balance } = this.props;
    return (
      <div className={styles.info}>
        <span className={styles.userName}>{userName}</span>
        <span className={styles.balance}>{balance}</span>
      </div>
    );
  }
}
UserInfo.defaultProps = {
  userName: "ShinyZhang",
  balance: "78979"
};
export default UserInfo;
