import React, { Component } from 'react';
import styles from './index.less';
const wxzf = '/static/img/payment/wxpy.png'
class CustomPayment extends Component {
    render() {
        return (
            <div className={styles.customPayment}>
                <img className={styles.img} src={wxzf} alt="刷线试试"/>
            </div>
        );
    }
}

export default CustomPayment;