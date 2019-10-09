import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PayMentChoose from "../../components/payment/index";
import AutoPayment from "../../components/autoPayment";
import {
  setPaymentType,
  setInputValues,
  onStandardRecharge,
  onCustomRecharge
} from "../../models/payment/actions";
import {
  makePaymentType,
  makeIsVerifySuccess
} from "../../models/payment/selects";
import Title from "./component/title";
import styles from "./index.less";
import {
  UserInputGroup,
  UserInput,
  HintLabel
} from "../../components/userInput";
import Button from "../../components/button";
import { valideAmount } from "../../utils/validates";
class Standard extends Component {
  onScroll = scrollTop => {
    const { parentProps } = this.props;
    const { setScrollTop } = parentProps;
    setScrollTop(scrollTop);
  };
  handlePayMentChoose = type => {
    const { onSetPaymentType } = this.props;
    onSetPaymentType(type);
  };
  outputInputValues = dada => {
    this.props.onSetInputDatas(dada);
  };
  onStandardRecharge = () => {
    const { paymentType, onStandardRecharge, onCustomRecharge } = this.props;
    onStandardRecharge({
      payType: paymentType === "zhifubao" ? "1" : "2",
      goodId: "001",
      payAmount: 8.88
    });
    onCustomRecharge({
      payType: paymentType === "zhifubao" ? "1" : "2",
      goodId: "001",
      payAmount: 8.88
    });
  };
  render() {
    const { paymentType, isVerifySuccess } = this.props;

    return (
      <div className={styles.wrap}>
        <Title />
        <UserInputGroup outputInputValues={this.outputInputValues}>
          <UserInput
            name="amount"
            type="number"
            verifyFn={valideAmount}
            verifyErrorMessage={" 必填。单位：元。精确小数点后2位"}
            placeholder="充值金额,（请输入正确金额）"
          />
          <HintLabel />
        </UserInputGroup>
        <Title title="选择支付方式" />
        <PayMentChoose
          isActive={paymentType === "zhifubao"}
          paymentType={paymentType}
          handlePayMentChoose={this.handlePayMentChoose}
        />
        <PayMentChoose
          isActive={paymentType === "weixinfang"}
          type="weixinfang"
          text="微信"
          paymentType={paymentType}
          handlePayMentChoose={this.handlePayMentChoose}
        />
        <Button
          btnText={"提交"}
          clickCheckBtn={this.onStandardRecharge}
          disabled={!isVerifySuccess}
        />
        <AutoPayment></AutoPayment>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  paymentType: makePaymentType,
  isVerifySuccess: makeIsVerifySuccess
});
const mapDispatchToProps = dispatch => ({
  onSetPaymentType: type => {
    dispatch(setPaymentType(type));
  },
  onSetInputDatas: inputDatas => {
    dispatch(setInputValues(inputDatas));
  },
  onStandardRecharge: data => {
    dispatch(onStandardRecharge(data));
  },
  onCustomRecharge: data => {
    dispatch(onStandardRecharge(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standard);
