import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import { isArray } from "lodash";
import styles from "./index.less";

const HeaderTabs = ({
  onTabClick = (tab, index) => {},
  onChangeTab = (tab, index) => {},
  tabs = [],
  initialPage = 0
}) => (
  <div className={styles.headerBar}>
    <Tabs
      tabs={
        isArray(tabs) &&
        tabs.map(item => {
          const { badgeText, title, dot, toTarget, ...other } = item;
          return {
            title:
              badgeText || dot ? (
                <Badge dot={dot} text={badgeText}>
                  {title}
                </Badge>
              ) : (
                title
              ),
            toTarget,
            other
          };
        })
      }
      initialPage={initialPage}
      onChange={onChangeTab}
      onTabClick={onTabClick}
      toTarget={"/index"}
    />
    <WhiteSpace />
  </div>
);

export default HeaderTabs;
