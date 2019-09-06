import React, { PureComponent } from 'react';
import { get, isFunction, isObject, isEmpty } from 'lodash';
import UserInput from './userInput';
import HintLabel from './hintLabel';
import VerifyCode from './verifyCode';
class UserInputGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      verifyErrorMessage: '',
      verifySuccessMessage: '',
      userInputGroupObj: {},
    };
    this.userInputGroupObj = {};
    this.compareInputs = {};
  }

  assignWidth = objValue => {
    if (get(this.userInputGroupObj, get(objValue, 'name'))) {
      return {
        ...this.userInputGroupObj,
        [get(objValue, 'name')]: {
          ...get(this.userInputGroupObj, get(objValue, 'name'), {}),
          ...objValue,
        },
      };
    }
    return {
      ...this.userInputGroupObj,
      [get(objValue, 'name')]: objValue,
    };
  };
  onChange = value => {
    const { someOneOnChange } = this.props;
    isFunction(someOneOnChange) && someOneOnChange(value);
  };
  onBlur = inputObj => {
    const { someOneOnBlur } = this.props;
    isFunction(someOneOnBlur) && someOneOnBlur(inputObj);
  };
  getError = outputInputValues => {
    const { verifyOnchange, compareErrorMessage } = this.props;
    const outputInputValuesKeys = Object.keys(outputInputValues);
    if (isObject(outputInputValues)) {
      outputInputValuesKeys.forEach(item => {
        let outputInputTime = verifyOnchange ? 'onChange' : 'onBlur';
        const currentOutputInputValues = outputInputValues[item];

        if (
          get(currentOutputInputValues, 'compareName', '') &&
          get(currentOutputInputValues, 'outputInputTime', '') === outputInputTime
        ) {
          if (!this.compareInputs[get(currentOutputInputValues, 'compareName')]) {
            this.compareInputs[get(currentOutputInputValues, 'compareName')] = [
              currentOutputInputValues,
            ];
          }
          const compareInput = get(
            this.compareInputs,
            get(currentOutputInputValues, 'compareName'),
            []
          );
          const pushFlag = compareInput.every((item, index) => {
            if (get(item, 'name') === get(currentOutputInputValues, 'name')) {
              compareInput[index] = currentOutputInputValues;
            }
            return item.name !== currentOutputInputValues.name;
          });
          if (pushFlag) {
            this.compareInputs[get(currentOutputInputValues, 'compareName')].push(
              currentOutputInputValues
            );
          }
        }
      });
      for (let key in this.compareInputs) {
        if (this.compareInputs[key].length > 1) {
          let successFlag = this.compareInputs[key].every((item, index) => {
            return item.value === this.compareInputs[key][0].value;
          });
          if (!successFlag) {
            this.setState({
              verifyErrorMessage: get(compareErrorMessage, key),
            });
            return;
          }
          this.setState({
            verifyErrorMessage: '',
          });
        }
      }

      const errorKeys = outputInputValuesKeys.filter(item => {
        const { verifyOnchange } = this.props;
        let outputInputTime = verifyOnchange ? 'onChange' : 'onBlur';
        return (
          (get(outputInputValues[item], 'outputInputTime', '') === outputInputTime &&
            get(outputInputValues[item], 'verifyErrorMessage', '')) ||
          get(outputInputValues[item], 'isShowErrorMassage', '') == true
        );
      });
      const errorObj = get(outputInputValues, errorKeys[0]);
      if (errorObj) {
        this.setState({
          verifyErrorMessage: get(errorObj, 'verifyErrorMessage', ''),
          verifySuccessMessage: '',
        });
        return false;
      } else {
        this.setState({
          verifyErrorMessage: '',
        });

        return isEmpty(
          outputInputValuesKeys.filter(item => {
            return get(outputInputValues[item], 'verifyErrorMessage', '');
          })
        );
      }
    }
  };
  outputInputValuesFn = inputObj => {
    const { outputInputValues } = this.props;
    this.userInputGroupObj = this.assignWidth(inputObj);
    const isVerifySuccess = this.getError(this.userInputGroupObj);
    isFunction(outputInputValues) &&
      outputInputValues({
        ...this.userInputGroupObj,
        isVerifySuccess,
      });
  };

  handleImgClick = () => {
    const { handleVerificationImgClick } = this.props;
    isFunction(handleVerificationImgClick) && handleVerificationImgClick();
  };
  render() {
    const { children, verifyOnchange, verifyOnBlur } = this.props;
    const { verifyErrorMessage } = this.state;
    const childrens = React.Children.map(children, option => {
      const { ...other } = option.props;
      if (option.type.COMPONENT_NAME === 'USER_INPUT') {
        return (
          <UserInput
            {...other}
            verifyOnchange={verifyOnchange}
            verifyOnBlur={verifyOnBlur}
            onBlur={this.onBlur}
            onChange={this.onChange}
            outputInputValue={this.outputInputValuesFn}
          />
        );
      } else if (option.type.COMPONENT_NAME === 'HINT_LABEL') {
        return (
          <HintLabel
            {...other}
            prefixCls={verifyErrorMessage ? 'error' : 'default'}
            message={verifyErrorMessage || verifyErrorMessage}
          />
        );
      } else if (option.type.COMPONENT_NAME === 'VERIFY_CODE') {
        return (
          <VerifyCode
            {...other}
            verifyOnchange={verifyOnchange}
            verifyOnBlur={verifyOnBlur}
            handleImgClick={this.handleImgClick}
            onBlur={this.onBlur}
            onChange={this.onChange}
            outputInputValue={this.outputInputValuesFn}
          />
        );
      }
    });
    return <>{childrens}</>;
  }
}
UserInputGroup.defaultProps = {
  verifyOnchange: true,
  verifyOnBlur: false,
  outputInputValues: () => {},
  handleVerificationImgClick: () => {},
  someOneOnChange: value => {
    console.log(someOneOnChange);
  },
  someOneOnBlur: () => {},
  compareErrorMessage: {
    password: '密码不一致',
  },
};
export default UserInputGroup;
