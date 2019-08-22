import React, { Component } from "react";
import classnames from "classnames";
import Bar from "../bar";
import styles from "./index.less";

class Setting extends Component {
  static COMPONENT_NAME = "SETTING";
  render() {
    const { setArr, className } = this.props;
    const setCls = classnames(className, {
      [styles.setting]: true
    });
    return (
      <div className={setCls}>
        {setArr &&
          setArr.map((item, index) => {
            const { icontType, className, barText } = item;
            return <Bar key={index} icontType={icontType} barText={barText} />;
          })}
      </div>
    );
  }
}
Setting.defaultProps = {
  setArr: [
    {
      icontType: "icon_night",
      barText: "夜间模式"
    },
    {
      icontType: "pifu",
      barText: "个性皮肤"
    },
    {
      icontType: "single",
      barText: "我的订单"
    },
    {
      icontType: "hkquit",
      barText: "退出"
    }
  ]
};
export default Setting;
