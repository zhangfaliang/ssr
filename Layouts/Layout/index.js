import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Router from "next/router";
import { Drawer } from "antd-mobile";
import styles from "./idnex.less";
import DistributeHeder from "../../components/header/distribute";
import DistributeFooterBar from "../../components/footer/distribute";
import { parseQuery } from "../../utils/commonFn";
import FeedbackModal from "../../components/feedbackModal/index";
import { makeListFeedbackModal } from "../../models/global/selects";
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
  setPathName,
  setTabKey
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
  onLogin = () => {
    Router.push("/user/login/index");
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
    const { setTabKey } = this.props;
    const { toTarget } = tab;
    setTabKey({ toTarget, key: index });
  };
  render() {
    const {
      listViewScrollTop,
      onSetCeilingFlag,
      ceilingFlag,
      pathName,
      tabs,
      feedbackModal
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
            onLogin={this.onLogin}
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
        <FeedbackModal
          {...feedbackModal}
          // footerText={get(feedbackModal, 'footerText', '')}
          // isOpen={get(feedbackModal, 'feedbackModalShowed')}
          // showLogo={get(feedbackModal, 'showLogo', false)}
          // logo={get(feedbackModal, 'logo', null)}
          // shouldCloseOnOverlayClick={!1}
          // callbackWhenConfirm={this.onFeedbackModalClose}
          // feedbackModalClose={this.onFeedbackModalClose}
          // showCloseIcon={get(feedbackModal, 'showCloseIcon', false)}
          // texts={get(feedbackModal, 'texts', [])}
        />
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
  setPathName: pathName => dispatch(setPathName(pathName)),
  setTabKey: params => dispatch(setTabKey(params)),
  feedbackModal: makeListFeedbackModal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
