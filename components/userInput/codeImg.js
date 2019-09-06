import React, { PureComponent } from 'react';

class CodeImg extends PureComponent {
  static COMPONENT_NAME = 'USER_INPUT';
  render() {
    const { uuid, handleImgClick, alt } = this.props;
    return (
      <>
        {uuid ? (
          <img onClick={handleImgClick} src={`/api/common/captcha?key=${uuid}`} alt={alt} />
        ) : (
          ''
        )}
      </>
    );
  }
}
CodeImg.defaultProps = {
  codeImgUrlFn: () => {},
  prefixCls: 'default',
  alt: '验证码',
  handleImgClick: () => {},
};

export default CodeImg;
