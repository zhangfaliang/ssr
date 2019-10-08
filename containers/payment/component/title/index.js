import React, { Component } from "react";
import styles from './index.less';
class Title extends Component {
  render() {
    const { title } = this.props;
    return <span className={styles.title}>{title}</span>;
  }
}
Title.defaultProps={
    title:'支付金额'
}

export default Title;
