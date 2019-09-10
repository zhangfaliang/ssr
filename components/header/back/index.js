import React, { Component } from "react";
import classnames from "classnames";
import { isEmpty, isFunction } from "lodash";
import IconFont from "../../iconFont";
import Router from "next/router";
import styles from "./index.less";
class Back extends Component {
  static defaultProps = {
    title: "Title",
    backIcon: <IconFont type="back" />,
    onBack: "",
    rightContent: [],
    onClose: null
  };

  renderContent = () => {
    const { title, showType } = this.props;
    switch (showType) {
      case "modal":
        return <>{title}</>;
      default:
        return title;
    }
  };
  render() {
    const {
      onBack,
      title,
      backIcon,
      rightContent,
      onClose,
      color
    } = this.props;

    const rightCls = classnames({
      [styles.right]: true,
      [styles.noRight]: isEmpty(rightContent)
    });
    return (
      <div style={{ backgroundColor: color }} className={styles.wrap}>
        <div className={styles.main}>
          <div
            onClick={() => {
              isFunction(onBack) ? onBack() : Router.back();
            }}
            className={styles.back}
          >
            <IconFont type="back" />
          </div>
          <div className={styles.content}>{this.renderContent()}</div>
          <div className={rightCls}>
            {rightContent.map((v, k) => {
              return <div key={k}>{v}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Back;
