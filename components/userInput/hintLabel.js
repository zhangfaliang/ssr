import React from 'react';
import classnames from 'classnames';
import styles from './hintLabel.less';
const HintLabel = ({
  message = 'Please enter login password before resetting your phone number.',
  prefixCls = 'error',
}) => {
  const hintCls = classnames({
    [styles[`${prefixCls}-hint-label`]]: true,
  });
  return <div className={hintCls}>{message}</div>;
};

HintLabel.COMPONENT_NAME = 'HINT_LABEL';
export default HintLabel;
