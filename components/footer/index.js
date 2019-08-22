import React, { Component } from "react";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import classnames from "classnames";
import Bar from "../bar";
import styles from "./index.less";

const tabs2 = [
  { title: "首页", sub: "1", icontType: "shouye" },
  { title: "帮助", sub: "2", icontType: "bangzhu" },
  { title: "收藏", sub: "3", icontType: "icon-" },
  { title: "会员", sub: "4", icontType: "VIP" }
];

class FooterBar extends Component {
  static COMPONENT_NAME = "FOOTER";
  // ={};
  state = {
    sub: 1
  };

  onTabClick = (tab, index) => {
    const { sub } = tab;
    this.setState({
      sub
    });
  };
  render() {
    const { onClickBar } = this.props;
    const { sub } = this.state;
    return (
      <div className={styles.footer}>
        <Tabs
          onTabClick={this.onTabClick}
          tabs={tabs2}
          initialPage={0}
          tabBarPosition="bottom"
          renderTab={tab => (
            <Bar
              className={sub === tab.sub && styles.active}
              icontType={tab.icontType}
              barText={tab.title}
              onClickBar={onClickBar}
            />
          )}
        />
      </div>
    );
  }
}
FooterBar.defaultProps = {
  onClickBar: () => {}
};
export default FooterBar;
