import React, { PureComponent } from "react";
import { Drawer, List, NavBar, Icon } from "antd-mobile";
import classnames from "classnames";
import styles from "./index.less";

class DrawerComponent extends PureComponent {
  state = {
    open: false
  };
  static getDerivedStateFromProps(props, state) {
    if (props.open !== state.open) {
      return { open: props.open };
    }
    return null;
  }
  onOpenChange = (...args) => {
    const { onOpenChange } = this.props;
    console.log(args);
    onOpenChange(!this.state.open);
    this.setState({ open: !this.state.open });
  };
  render() {
    // fix in codepen
    const { children, ceilingFlag } = this.props;

    const drawerCls = classnames({
      [styles.drawer]: true,
      [styles.ceiling]: ceilingFlag
    });
    const sidebar = (
      <List>
        {[0, 1, 2, 3, 4, 5, 6].map((i, index) => {
          if (index === 0) {
            return (
              <List.Item
                key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                multipleLine
              >
                Category
              </List.Item>
            );
          }
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            >
              Category{index}
            </List.Item>
          );
        })}
      </List>
    );
    return (
      //ceiling
      <div className={styles["drawer-warp"]}>
        <Drawer
          className={`${drawerCls} my-drawer `}
          enableDragHandle
          contentStyle={{
            color: "#A6A6A6",
            textAlign: "center",
            paddingTop: 10
          }}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
          {children}
        </Drawer>
      </div>
    );
  }
}
DrawerComponent.default = {
  onOpenChange: () => {}
};
export default DrawerComponent;
