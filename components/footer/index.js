import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import styles from "./index.less";

const tabs2 = [
  { title: "首页", sub: "1" },
  { title: "平台", sub: "2" },
  { title: "订单", sub: "3" },
  { title: "会员", sub: "4" }
];

const FooterBar = () => (
  <div className={styles.footer}>
    <Tabs
      tabs={tabs2}
      initialPage={1}
      tabBarPosition="bottom"
      renderTab={tab => <span>{tab.title}</span>}
    />
  </div>
);

export default FooterBar;
