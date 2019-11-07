import React, { Component } from "react";
import { isArray } from "lodash";
import { Button } from "antd-mobile";
import styles from "./index.less";

class Recharge extends Component {
  static COMPONENT_NAME = "RECHARGE";

  render() {
    const { userSlidBtn, handuleBtn } = this.props;
    return (
      <div className={styles.recharge}>
        {isArray(userSlidBtn) &&
          userSlidBtn.map((item, index) => {
            const { name, type, size, key } = item;
            return (
              <Button
                size={size || "small"}
                key={index}
                className={styles.btn}
                type={type || "primary"}
                onClick={handuleBtn.bind(this, key)}
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
  btnArrData: [],
  handuleBtn: () => {}
};
export default Recharge;
