import React, { Component } from "react";
import classnames from "classnames";
import styles from "./index.less";
import DetailHeader from "../../components/header/detailHeader";
class CustomPayment extends Component {
  state = { isShow: false };
  static getDerivedStateFromProps(props, state) {
    if (props.isShow !== state.isShow) {
      return { isShow: props.isShow };
    }
    return null;
  }
  render() {
    const { type, amount, className, payimg, onSetCeilingFlag } = this.props;
    const customPaymentCls = classnames(
      { [styles.customPayment]: true, [styles.isShow]: this.state.isShow },
      className
    );

    return (
      <div className={customPaymentCls}>
        {/* 1：支付宝；2：微信。 */}
        <DetailHeader
          onSetCeilingFlag={onSetCeilingFlag}
          rigthIconShow={false}
          title="充值"
          className={styles.herder}
        />
        <div className={styles.title}>
          请使用使用{Number(type) === 1 ? "支付宝" : "微信支付"}
        </div>
        <div className={styles.description}>
          请支付对应金额<span className={styles.mount}>{amount}</span>
          ，否则支付不成功，无法退款！
        </div>
        <img className={styles.img} src={payimg} alt="刷新试试" />
      </div>
    );
  }
}
CustomPayment.defaultProps = {
  className: "",
  payType: 2,
  imgUrl: "/static/img/payment/wxpay.png",
  amount: 0.05,
  isShow: false
};
export default CustomPayment;
