import React, { Component } from "react";
import UserPhoto from "./userPhoto";
import UserInfo from "./userInfo";
import Recharge from "./recharge";
import SlideList from "./slideList";
import Setting from "./setting";
import styles from "./index.less";

class SildUserWarp extends Component {
  render() {
    const { children } = this.props;
    const options = React.Children.map(children, option => {
      const { ...other } = option.props;
      if (option.type.COMPONENT_NAME === "USER_PHOTO") {
        return <UserPhoto {...other} />;
      } else if (option.type.COMPONENT_NAME === "USER_INFO") {
        return <UserInfo {...other} />;
      } else if (option.type.COMPONENT_NAME === "RECHARGE") {
        return <Recharge {...other} />;
      } else if (option.type.COMPONENT_NAME === "SLIDE_LIST") {
        return <SlideList {...other} />;
      } else if (option.type.COMPONENT_NAME === "SETTING") {
        return <Setting {...other} />;
      }
    });
    return <div className={styles.sildUserWarp}>{options}</div>;
  }
}

export default SildUserWarp;
