import React, { PureComponent } from "react";
import { Drawer, List, NavBar, Icon } from "antd-mobile";
import classnames from "classnames";
import { SildUserWarp, UserPhoto } from "../../components/sildeUser";
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
      <SildUserWarp>
        <UserPhoto />
      </SildUserWarp>
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
