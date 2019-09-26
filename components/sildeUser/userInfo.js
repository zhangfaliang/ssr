import React, { Component } from "react";
import styles from "./index.less";

class UserInfo extends Component {
  static COMPONENT_NAME = "USER_INFO";

  render() {
    const { userName, balance } = this.props;
    console.log(this.props);
    return (
      <div className={styles.info}>
        <span className={styles.userName}>{userName}</span>
        <span className={styles.balance}>金币：{balance}</span>
      </div>
    );
  }
}
UserInfo.defaultProps = {
  userName: "",
  balance: ""
};
export default UserInfo;
