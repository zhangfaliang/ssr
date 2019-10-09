import React, { Component } from "react";

class AutoPayment extends Component {
  render() {
    return (
      <form
        action="https://www.greenyep.com/api/index"
        id="formpay"
        method="post"
        style={{ display: "none" }}
      >
        <input id="order_goodname" name="goodname" type="hidden" />
        <input id="order_type" name="type" type="hidden" />
        <input id="order_key" name="key" type="hidden" />
        <input id="order_mode" name="mode" type="hidden" />
        <input id="order_account" name="account" type="hidden" />
        <input id="order_notifyurl" name="notifyurl" type="hidden" />
        <input id="order_returnurl" name="returnurl" type="hidden" />
        <input id="order_ordernum" name="ordernum" type="hidden" />
        <input id="order_orderuid" name="orderuid" type="hidden" />
        <input id="order_amount" name="amount" type="hidden" />
        <input id="order_uid" name="uid" type="hidden" />
        <input id="btnRechargeSend" type="submit"></input>
      </form>
    );
  }
}
AutoPayment.defaultProps = {
  payFormData: {}
};
export default AutoPayment;
