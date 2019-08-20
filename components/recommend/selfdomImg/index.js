import React, { PureComponent } from "react";
import classnames from "classnames";
import styles from "./index.less";

class SelfdomImg extends PureComponent {
  render() {
    const { imgSrc, imgTitle } = this.props;
    const selfdomImgCls = classnames({
      [styles.imgWrap]: true
    });
    return (
      <div className={selfdomImgCls}>
        <img className={styles.selfdomImg} src={imgSrc} alt="" />
        <div  className={styles.imgTitleWrap}>
        <span >{imgTitle}</span>
        </div> 
      </div>
    );
  }
}
SelfdomImg.defaultProps = {
  prefixCls: "default",
  imgSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIHPcqye89ruTT3J3pFTFmVPvkSwlHZquCe4-Q4Ntlok-Hogk",
  imgTitle: "字母哥，隔空飞扣，篮筐爆炸💥"
};
export default SelfdomImg;
