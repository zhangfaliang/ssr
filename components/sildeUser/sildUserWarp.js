import React, { Component } from "react";
import UserPhoto from "./userPhoto";
import UserInfo from "./userInfo";
import Recharge from "./recharge";
import SlideList from "./slideList";
import Setting from './setting';
import styles from "./index.less";

class SildUserWarp extends Component {
  render() {
    const { children } = this.props;
    const options = React.Children.map(children, option => {
      const { ...other } = option;
      if (option.type.COMPONENT_NAME === "USER_PHOTO") {
        return <UserPhoto />;
      } else if (option.type.COMPONENT_NAME === "USER_INFO") {
        return <UserInfo />;
      } else if (option.type.COMPONENT_NAME === "RECHARGE") {
        return <Recharge />;
      } else if (option.type.COMPONENT_NAME === "SLIDE_LIST") {
        return <SlideList />;
      }else if (option.type.COMPONENT_NAME === "SETTING") {
        return <Setting />;
      }

      
    });
    return <div className={styles.sildUserWarp}>{options}</div>;
  }
}

export default SildUserWarp;
