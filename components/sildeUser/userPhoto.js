import React, { Component } from "react";
import styles from "./index.less";

class UserPhoto extends Component {
  static COMPONENT_NAME = "USER_PHOTO";
  render() {
    const { photoSrc, userName, balance } = this.props;
    return (
      <div className={styles.photoWrap}>
        <img className={styles.photo} src={photoSrc} alt="" />
        <span className={styles.userName}>{userName}</span>
        <span className={styles.balance}>{balance}</span>
      </div>
    );
  }
}
UserPhoto.defaultProps = {
  photoSrc:
    "http://p4.music.126.net/MjA25CJSEPFwb5oP2sG_ig==/109951164014144896.jpg?param=30y30",
  userName: "ShinyZhang",
  balance: "78979"
};
export default UserPhoto;
