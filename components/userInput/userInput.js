import React, { PureComponent, createRef } from "react";
import classnames from "classnames";
import { isFunction } from "lodash";
import styles from "./index.less";
import IconFont from "../iconFont";

class UserInput extends PureComponent {
  static COMPONENT_NAME = "USER_INPUT";
  constructor(props) {
    super(props);
    this.IPRef = createRef();
    this.state = {
      showLeftIcon: false,
      type: props.type
    };
  }
  onChange = e => {
    const { verifyOnchange, onChange } = this.props;
    this.getInputValue({
      outputInputTime: "onChange",
      callback: onChange,
      verifyFlag: verifyOnchange
    });
  };
  handleLock = e => {
    e.preventDefault();
    e.stopPropagation();
    const type = this.IPRef.current.type;
    this.setState(
      {
        type: type === "password" ? "text" : "password",
        showLeftIcon: true
      },
      () => {
        this.IPRef.current.focus();
      }
    );
  };

  getInputValue = ({
    outputInputTime,
    isShowErrorMassage,
    callBack,
    verifyFlag
  }) => {
    const {
      verifySuccessMessage,
      verifyErrorMessage,
      verifyFn,
      name,
      placeholder,
      outputInputValue,
      type,
      compareName
    } = this.props;
    let resFlag = true;
    if (verifyFlag) {
      resFlag = verifyFn(this.IPRef.current.value);
    }

    const data = {
      value: this.IPRef.current.value,
      verifyErrorMessage: isShowErrorMassage
        ? verifyErrorMessage
        : resFlag === false
        ? verifyErrorMessage
        : "",
      verifySuccessMessage: verifyFlag ? verifySuccessMessage : "",
      verifyFlag: resFlag,
      name: name || placeholder,
      outputInputTime,
      type,
      isShowErrorMassage,
      compareName
    };
    isFunction(outputInputValue) && outputInputValue(data);
    isFunction(callBack) && callBack(data);
  };

  handleClear = e => {
    e.preventDefault();
    e.stopPropagation();
    this.IPRef.current.focus();
    const { verifyOnchange } = this.props;
    this.IPRef.current.value = "";
    this.getInputValue({
      outputInputTime: "onChange",
      verifyFlag: verifyOnchange
    });
  };

  onFocus = e => {
    this.setState({
      showLeftIcon: true
    });
  };

  onBlur = e => {
    const { verifyOnBlur, onBlur, name } = this.props;
    this.setState({
      showLeftIcon: false
    });
    if (verifyOnBlur) {
      this.getInputValue({
        outputInputTime: "onBlur",
        callback: onBlur,
        verifyFlag: verifyOnBlur
      });
    }
    isFunction(onBlur) && onBlur({ name, value: this.IPRef.current.value });
  };
  componentDidMount() {
    this.getInputValue({
      outputInputTime: "componentDidMount",
      isShowErrorMassage: this.props.isShowErrorMassage,
      verifyFlag: true
    });
  }
  render() {
    const {
      prefixCls,
      minLength,
      maxLength,
      placeholder,
      name,
      preFixPlaceholder,
      autoComplete,
      extra
    } = this.props;
    const { showLeftIcon, type } = this.state;
    const wrapCls = classnames({
      [styles[`${prefixCls}-wrap`]]: true
    });
    const inputCls = classnames({
      [styles[`input`]]: true,
      [styles[`tel-preFixPlaceholder`]]: preFixPlaceholder
    });

    const showIconCls = classnames({
      [styles[`showIcon`]]: true
    });
    const isCloseCls = classnames({
      [styles[`isClose`]]: true,
      [styles[`hiddenClose`]]: extra || !showLeftIcon
    });

    const extraCls = classnames({
      [styles.extraWrap]: extra
    });

    return (
      <div className={wrapCls}>
        {preFixPlaceholder && (
          <span className={styles.preFixPlaceholder}>{preFixPlaceholder}</span>
        )}
        <div className={showIconCls} onClick={this.handleClear}>
          <span className={isCloseCls} onClick={this.handleClear}>
            <IconFont type="close" />
          </span>
          {this.props.type === "password" ? (
            <span className={styles.isPassword} onClick={this.handleLock}>
              <IconFont type={type === "password" ? 'password' : "close"} />
            </span>
          ) : (
            ""
          )}
        </div>
        <div className={extraCls}>
          <input
            autoComplete={autoComplete}
            ref={this.IPRef}
            className={inputCls}
            name={name}
            type={type}
            maxLength={maxLength}
            minLength={minLength}
            placeholder={placeholder}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
          <div className={styles.extra}>{extra}</div>
        </div>
      </div>
    );
  }
}

UserInput.defaultProps = {
  prefixCls: "default",
  type: "text",
  minLength: 0,
  maxLength: 255,
  placeholder: "Password Again 6-16",
  name: "",
  preFixPlaceholder: "",
  autoComplete: "new-password",
  showLeftIcon: true,
  verifyOnchange: true,
  verifyOnBlur: false,
  verifyErrorMessage: "",
  verifySuccessMessage: "",
  isShowErrorMassage: false,
  compareName: "",
  onChange: value => {},
  verifyFn: value => true,
  onBlur: inputObj => {},
  outputInputValue: inputObj => {},
  extra: ""
};

export default UserInput;
