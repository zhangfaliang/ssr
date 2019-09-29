import React, { Component } from "react";
import classnames from "classnames";
import Bar from "../bar";
import styles from "./index.less";

class Setting extends Component {
  static COMPONENT_NAME = "SETTING";
  render() {
    const { className, onClickBar, userSetBtn } = this.props;
    const setCls = classnames(className, {
      [styles.setting]: true
    });
    return (
      <div className={setCls}>
        {userSetBtn &&
          userSetBtn.map((item, index) => {
            const { icontType, name, key } = item;
            return (
              <Bar
                onClickBar={onClickBar}
                key={key}
                icontType={icontType}
                barText={name}
              />
            );
          })}
      </div>
    );
  }
}
Setting.defaultProps = {
  onClickBar: () => {},
  userSetBtn: []
};
export default Setting;
