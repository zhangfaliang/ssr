import React, { Component } from 'react'
import classnames from 'classnames';
import styles from './index.less';
import moment from 'moment'

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            times: props.times
        }
    }
    render() {
        const { times } = this.state;
        const minutes = Math.floor(times / 60);
        const seconds = Math.floor(times - minutes * 60);
        return (
            <div className={styles.countdown}>
                支付时间剩余时间{minutes ? `${minutes}分` : ''}  {`${seconds}秒`}
            </div>
        )
    }
    componentDidMount() {
        this.times = setInterval(() => {
            const { times } = this.state;
            if (times - 1 <= 0) {
                this.props.outmodedFn(true)
                clearInterval(this.times)
            }
            this.setState({
                times: this.state.times - 1
            })
        }, 1000);
    }
}
CountDown.defaultProps = {
    className: '',
    times: 300,
    outmodedFn: () => { }
}
export default CountDown