import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Drawer } from "antd-mobile";
import styles from "./idnex.less";
import Header from "../../components/header";
import FooterBar from "../../components/footer";

import {
  SildUserWarp,
  UserPhoto,
  UserInfo,
  Recharge,
  SlideList,
  Setting
} from "../../components/sildeUser";

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
    isDrawerOpen: true,
    open: false
  };

  // static getDerivedStateFromProps(props, state) {
  //   if (props.isDrawerOpen !== state.isDrawerOpen) {
  //     return { isDrawerOpen: props.isDrawerOpen };
  //   }
  //   return null;
  // }
  onOpenChange = (...args) => {
    const { onOpenChange } = this.props;
    console.log(args);
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
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
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  renderChildren() {
    const { children, ...other } = this.props;
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        parentProps: other
      });
    });
  }
  render() {
    const { listViewScrollTop, onSetCeilingFlag, ceilingFlag } = this.props;
    const sidebar = (
      <SildUserWarp>
        <UserPhoto />
        <UserInfo />
        <Recharge />
        <Setting />
        <SlideList />
      
      </SildUserWarp>
    );
    const { isDrawerOpen } = this.state;
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
