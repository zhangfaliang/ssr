import React, { Component } from "react";
import UserPhoto from "./userPhoto";

class SildUserWarp extends Component {
  render() {
    const { children } = this.props;
    const options = React.Children.map(children, option => {
      const { ...other } = option;
      if (option.type.COMPONENT_NAME === "USER_PHOTO") {
        return <UserPhoto />;
      }
    });
    console.log(options)
    return <div>{options}</div>;
  }
}

export default SildUserWarp;
