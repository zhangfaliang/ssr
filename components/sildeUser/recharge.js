import React, { Component } from "react";
import { isArray } from "lodash";
import { Button } from "antd-mobile";
import styles from "./index.less";

class Recharge extends Component {
  static COMPONENT_NAME = "RECHARGE";

  render() {
    const { btnArrData } = this.props;
    return (
      <div className={styles.recharge}>
        {isArray(btnArrData) &&
          btnArrData.map((item, index) => {
            const { text, type, size } = item;
            return (
              <Button
                size={size}
                key={index}
                className={styles.btn}
                type={type}
              >
                {text}
              </Button>
            );
          })}
      </div>
    );
  }
}
Recharge.defaultProps = {
  btnArrData: [
    {
      text: "会员的世界",
      type: "primary",
      size: "small"
    },
    {
      text: "充值",
      type: "primary",
      size: "small"
    }
  ]
};
export default Recharge;
