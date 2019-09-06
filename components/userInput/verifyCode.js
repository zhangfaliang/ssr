import React, { PureComponent } from 'react';
import classnames from 'classnames';
import UserInput from './userInput';
import CodeImg from './codeImg';
import styles from './verifyCode.less';

class VerifyCode extends PureComponent {
  static COMPONENT_NAME = 'VERIFY_CODE';
  render() {
    const {
      verifyFn,
      handleImgClick,
      prefixCls,
      children,
      verifyErrorMessage,
      verifySuccessMessage,
      outputInputValue,
      isShowErrorMassage,
      verifyOnchange,
      verifyOnBlur,
      uuid,
      codeImgUrlFn,
    } = this.props;
    const childrens = React.Children.map(children, option => {
      const { ...other } = option.props;
      if (option.type.COMPONENT_NAME === 'USER_INPUT') {
        return (
          <UserInput
            {...other}
            verifyOnchange={verifyOnchange}
            verifyOnBlur={verifyOnBlur}
            isShowErrorMassage={isShowErrorMassage}
            verifyFn={verifyFn}
            verifyErrorMessage={verifyErrorMessage}
            verifySuccessMessage={verifySuccessMessage}
            outputInputValue={outputInputValue}
          />
        );
      } else {
        return '';
      }
    });
    const verifyCls = classnames({
      [styles[`${prefixCls}-verify-code`]]: true,
    });
    return (
      <div className={verifyCls}>
        {childrens}
        <CodeImg uuid={uuid} codeImgUrlFn={codeImgUrlFn} handleImgClick={handleImgClick} />
      </div>
    );
  }
}
VerifyCode.defaultProps = {
  codeImgUrl: '',
  prefixCls: 'default',
  alt: '验证码',
  verifyErrorMessage: '',
  verifySuccessMessage: '',
  verifyOnchange: true,
  verifyOnBlur: false,
  isShowErrorMassage: false,
  verifyFn: () => {},
  handleImgClick: () => {},
  onVerifySuccess: () => {},
  onVerifyError: () => {},
  codeImgUrlFn: () => {},
};

export default VerifyCode;
