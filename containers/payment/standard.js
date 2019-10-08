import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PayMentChoose from "../../components/payment/index";
import {
  setPaymentType,
  setInputValues,
  onRecharge
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
  onRecharge = () => {
    const { paymentType, onRecharge } = this.props;
    onRecharge({ type: paymentType === "zhifubao" ? "1" : "2", goodId: "001" });
  };
  render() {
    const { paymentType, isVerifySuccess, onRecharge } = this.props;

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
          clickCheckBtn={this.onRecharge}
          disabled={!isVerifySuccess}
        />
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
  onRecharge: (data) => {
    dispatch(onRecharge(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standard);
