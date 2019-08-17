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
  render() {
    const { onClickBar }  =this.props;
    return (
      <div className={styles.footer}>
        <Tabs
          tabs={tabs2}
          initialPage={2}
          tabBarPosition="bottom"
          renderTab={tab => (
            <Bar
              className={styles.active}
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
FooterBar.defaultProps={
  onClickBar:()=>{}
}
export default FooterBar;
