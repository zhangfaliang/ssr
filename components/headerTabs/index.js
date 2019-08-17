import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import styles from './index.less';
const tabs = [
  { title: <Badge text={"3"}>直播</Badge> },
  { title: <Badge text={"今日(20)"}>推荐</Badge> },
  { title: <Badge dot>热门</Badge> },
  { title: <Badge text={"3"}>最新</Badge> },
  { title: <Badge text={"今日(20)"}>动漫</Badge> },
  { title: <Badge dot>影视</Badge> }
];

const HeaderTabs = () => (
  <div className ={styles.headerBar}>
    <Tabs
      tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => {
        console.log("onChange", index, tab);
      }}
      onTabClick={(tab, index) => {
        console.log("onTabClick", index, tab);
      }}
    />
    <WhiteSpace />
  </div>
);

export default HeaderTabs;
