import React, { Component } from "react";
import { isArray } from "lodash";
import { Button } from "antd-mobile";
import styles from "./index.less";

class Recharge extends Component {
  static COMPONENT_NAME = "RECHARGE";

  render() {
    const { userSlidBtn } = this.props;
    return (
      <div className={styles.recharge}>
        {isArray(userSlidBtn) &&
          userSlidBtn.map((item, index) => {
            const { name, type, size } = item;
            return (
              <Button
                size={size || "small"}
                key={index}
                className={styles.btn}
                type={type || "primary"}
              >
                {name}
              </Button>
            );
          })}
      </div>
    );
  }
}
Recharge.defaultProps = {
  btnArrData: []
};
export default Recharge;
