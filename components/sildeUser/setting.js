import React, { Component } from "react";
import classnames from "classnames";
import Bar from "../bar";
import styles from "./index.less";

class Setting extends Component {
  static COMPONENT_NAME = "SETTING";
  render() {
    const { setArr, className, onClickBar } = this.props;
    const setCls = classnames(className, {
      [styles.setting]: true
    });
    return (
      <div className={setCls}>
        {setArr &&
          setArr.map((item, index) => {
            const { icontType, className, barText } = item;
            return (
              <Bar
                onClickBar={onClickBar}
                key={index}
                icontType={icontType}
                barText={barText}
              />
            );
          })}
      </div>
    );
  }
}
Setting.defaultProps = {
  onClickBar: () => {},
  setArr: [
    {
      icontType: "icon_night",
      barText: "夜间模式"
    },
    {
      icontType: "pifu",
      key:'skin',
      barText: "个性皮肤"
    },
    {
      icontType: "single",
      key:'order',
      barText: "我的订单"
    },
    {
      icontType: "hkquit",
      key:'logOut',
      barText: "退出"
    }
  ]
};
export default Setting;
