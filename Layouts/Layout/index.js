import classnames from "classnames";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Drawer, List, NavBar, Icon } from "antd-mobile";
import styles from "./idnex.less";
import Header from "../../components/header";
import FooterBar from "../../components/footer";
import DrawerComponent from "../../components/drawer";
import { widthHeader } from "../../decorator/index";
import { SildUserWarp, UserPhoto } from "../../components/sildeUser";

import {
  setListViewScrollTop,
  setCeilingFlag
} from "../../models/global/actions";
import {
  makeListViewScrollTop,
  makeCeilingFlag
} from "../../models//global/selects";

class Layout extends React.Component {
  state = {
    visible: false,
    placement: "left",
    isDrawerOpen: false,
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

  showDrawer = () => {
    this.setState({
      visible: true,
      collapsed: false
    });
  };
  onLeftClick = isDrawerOpen => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  };
  onOpenChange = isDrawerOpen => {
    this.setState({
      isDrawerOpen
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  renderChildren() {
    const { children, ...other } = this.props;

    return React.Children.map(children, child => {
      console.log(child, "------");
      return React.cloneElement(child, {
        parentProps: other
      });
    });
  }
  render() {
    const {
      children,
      mainNoScroll,
      setScrollTop,
      listViewScrollTop,
      onSetCeilingFlag,
      ceilingFlag
    } = this.props;
    const sidebar = (
      <SildUserWarp>
        <UserPhoto />
      </SildUserWarp>
    );
    const { isDrawerOpen } = this.state;
    const mainCls = classnames({
      [styles.main]: true,
      [styles["no-scroll"]]: mainNoScroll
    });
    return (
      <Drawer
        className={`${styles.drawer} my-drawer `}
        enableDragHandle
        contentStyle={{
          color: "#A6A6A6",
          textAlign: "center",
          paddingTop: 10
        }}
        sidebar={sidebar}
        open={isDrawerOpen}
        onOpenChange={this.onOpenChange}
      >
        <div className={styles.layout}>
          <Header
            listViewScrollTop={listViewScrollTop}
            onLeftClick={this.onLeftClick}
            onSetCeilingFlag={onSetCeilingFlag}
            ceilingFlag={ceilingFlag}
            key={"erterter"}
          />
          <div className={styles.main}>{this.renderChildren()}</div>
          <FooterBar />
        </div>
      </Drawer>
    );
  }
}
Layout.defaultProps = {
  mainNoScroll: true
};
const mapStateToProps = createStructuredSelector({
  listViewScrollTop: makeListViewScrollTop,
  ceilingFlag: makeCeilingFlag
});

const mapDispatchToProps = dispatch => ({
  setScrollTop: scrollTop => dispatch(setListViewScrollTop(scrollTop)),
  onSetCeilingFlag: ceilingFlag => dispatch(setCeilingFlag(ceilingFlag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
