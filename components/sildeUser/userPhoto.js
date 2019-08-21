import React, { Component } from "react";
import styles from "./index.less";

class UserPhoto extends Component {
  static COMPONENT_NAME = "USER_PHOTO";
  render() {
    const { photoSrc } = this.props;
    return (
      <div className={styles.photoWrap}>
        <img className={styles.photo} src={photoSrc} alt="" />
      </div>
    );
  }
}
UserPhoto.defaultProps = {
  photoSrc:
    "https://pic.qqtn.com/up/2019-4/2019040917510740548.jpg",
};
export default UserPhoto;
