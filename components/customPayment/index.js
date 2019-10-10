import React, { Component } from "react";
import classnames from "classnames";
import styles from "./index.less";
import DetailHeader from "../../components/header/detailHeader";
import CountDown from '../../components/countDown'
class CustomPayment extends Component {
  state = { isShow: false };
  static getDerivedStateFromProps(props, state) {
    if (props.isShow !== state.isShow) {
      return { isShow: props.isShow };
    }
    return null;
  }

  closeModule = () => {
    const { onPollingStop, onSetPayModule } = this.props;
    onPollingStop()
    onSetPayModule(false)
  }
  render() {
    const { type, amount, className, payimg, onSetCeilingFlag, timeout, isShow } = this.props;
    const customPaymentCls = classnames(
      { [styles.customPayment]: true, [styles.isShow]: this.state.isShow },
      className
    );
    const payApp = Number(type) === 1 ? "支付宝" : "微信支付"
    return (
      <div className={customPaymentCls}>
        {/* 1：支付宝；2：微信。 */}
        <DetailHeader
          onBack={this.closeModule}
          onSetCeilingFlag={onSetCeilingFlag}
          rigthIconShow={false}
          title="充值"
          className={styles.herder}
        />
        <div className={styles.title}>
          付款须知
         <br></br>
          请使用{payApp}
        </div>
        <div className={styles.description}>
          请截屏或长按二维码保存图片至相册，然后打开{payApp}扫一扫，点击右上角相册，选择保存的图片识别支付。
          <br></br>
          请支付对应金额<span className={styles.mount}>￥{amount}</span>
          ，否则支付不成功，无法退款！
        </div>
        <img className={styles.img} src={payimg} alt="刷新试试" />
        <CountDown times={timeout} outmodedFn={this.closeModule} />
      </div>
    );
  }
}
CustomPayment.defaultProps = {
  className: "",
  payType: 2,
  imgUrl: "/static/img/payment/wxpay.png",
  amount: 0.01,
  isShow: false
};
export default CustomPayment;
