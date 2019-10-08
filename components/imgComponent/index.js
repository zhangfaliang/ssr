import React, { Component } from "react";
import classnames from "classnames";
import styles from "./index.less";

class ImgComponent extends Component {
  render() {
    const { imgUrl, onClick, className } = this.props;
    const imgCls = classnames(
      {
        [styles.img]: true
      },
      className
    );
    return <img onClick={onClick} className={imgCls} src={imgUrl} alt="" />;
  }
}
ImgComponent.defaultProps = {
  className: "",
  onClick: () => {},
  imgUrl: "/static/img/payment/zhufubao.png"
};
export default ImgComponent;
