import React, { Component } from "react";
import classnames from "classnames";
import IconFont from "../iconFont";
import styles from "./index.less";
import ImgComponent from "../imgComponent";
class PayMentChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.isActive !== state.isActive) {
      return { isActive: props.isActive };
    }
    return null;
  }
  handlePayMentChoose = () => {
    const { handlePayMentChoose, type } = this.props;
    handlePayMentChoose(type);
  };
  render() {
    const { type, className, text, paymentType } = this.props;
    const { isActive } = this.state;

    const payMantCls = classnames(
      {
        [styles.wrap]: true
      },
      className
    );
    return (
      <div className={payMantCls} onClick={this.handlePayMentChoose}>
        {isActive ? (
          <ImgComponent
            imgUrl={
              paymentType === "zhifubao"
                ? "/static/img/payment/zhufubao.png"
                : "/static/img/payment/weixin.png"
            }
          />
        ) : (
          <IconFont className={styles.iconFontCls} type={type} />
        )}

        <span className={styles.text}>{text}</span>
      </div>
    );
  }
}
PayMentChoose.defaultProps = {
  isActive: false,
  typeKey: 0,
  type: "zhifubao",
  className: "",
  text: "支付宝",
  paymentType: "",
  handlePayMentChoose: () => {}
};
export default PayMentChoose;
