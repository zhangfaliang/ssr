import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Router from "next/router";
import { Drawer } from "antd-mobile";
import styles from "./idnex.less";
import Header from "../../components/header";
import DistributeHeder from "../../components/header/distribute";
import DistributeFooterBar from "../../components/footer/distribute";
import { parseQuery } from "../../utils/commonFn";

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
  setCeilingFlag,
  setPathName
} from "../../models/global/actions";
import {
  makeListViewScrollTop,
  makeCeilingFlag,
  makePathName,
  makeTabs
} from "../../models/global/selects";

class Layout extends React.Component {
  state = {
    visible: false,
    placement: "left",
    isDrawerOpen: false,
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
  onChangeTab = (tab, index) => {
    console.log(tab, index);
  };
  onTabClick = (tab, index) => {
    console.log(tab, index);
    // Router.push({
    //   pathname:'/type_list'
    // })
  };
  render() {
    const {
      listViewScrollTop,
      onSetCeilingFlag,
      ceilingFlag,
      pathName,
      tabs
    } = this.props;
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
        open={isDrawerOpen || false}
        onOpenChange={this.onOpenChange}
      >
        <div className={styles.layout}>
          <DistributeHeder
            onChangeTab={this.onChangeTab}
            onTabClick={this.onTabClick}
            listViewScrollTop={listViewScrollTop}
            onLeftClick={this.onLeftClick}
            onSetCeilingFlag={onSetCeilingFlag}
            ceilingFlag={ceilingFlag}
            pathname={pathName}
            tabs={tabs}
          />
          <div className={styles.main}>{this.renderChildren()}</div>
          <DistributeFooterBar
            listViewScrollTop={listViewScrollTop}
            onLeftClick={this.onLeftClick}
            onSetCeilingFlag={onSetCeilingFlag}
            ceilingFlag={ceilingFlag}
            pathname={pathName}
          />
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
  ceilingFlag: makeCeilingFlag,
  pathName: makePathName,
  tabs: makeTabs
});

const mapDispatchToProps = dispatch => ({
  setScrollTop: scrollTop => dispatch(setListViewScrollTop(scrollTop)),
  onSetCeilingFlag: ceilingFlag => dispatch(setCeilingFlag(ceilingFlag)),
  setPathName: setPathName => dispatch(setPathName(setPathName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
