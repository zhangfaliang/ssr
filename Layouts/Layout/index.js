import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import router from "next/router";
import { get } from "lodash";
import { isFunction } from "lodash";
import { Drawer } from "antd-mobile";
import styles from "./idnex.less";
import DistributeHeder from "../../components/header/distribute";
import DistributeFooterBar from "../../components/footer/distribute";
import { FeedbackModal } from "../../components/feedbackModal/index";
import {
  makeListFeedbackModal,
  makeUserInfo,
  makeIsLogin,
  makeUserSildFalg,
  makeIndexConfig
} from "../../models/global/selects";
import {
  setFeedbackModal,
  initPage,
  initClickBar,
  changeUserSild
} from "../../models/global/actions";

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
    open: false
  };
  componentDidMount() {
    this.props.onInitPage();
  }

  showDrawer = () => {
    this.setState({
      visible: true,
      collapsed: false
    });
  };
  openUserSlidChange = isDrawerOpen => {
    const { onOpenUserSlidChange, userSildFalg } = this.props;
    onOpenUserSlidChange(!userSildFalg);
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  onLogin = () => {
    router.push("/user/login/index");
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
  onFeedbackModalClose = () => {
    const { feedbackModal, onSetFeedbackModal } = this.props;
    const { url, routerFn, query, state } = get(
      feedbackModal,
      "onRequestCloseUrlObj",
      {
        url: "",
        routerFn: ""
      }
    );
    isFunction(router[routerFn]) &&
      router[routerFn]({
        pathname: url,
        query: query || {},
        state: state || state
      });
    onSetFeedbackModal({ isOpen: false });
  };
  render() {
    const {
      listViewScrollTop,
      onSetCeilingFlag,
      ceilingFlag,
      pathName,
      tabs,
      feedbackModal,
      userInfo,
      isLogin,
      userSildFalg,
      indexConfig
    } = this.props;
    const { userSlidBtn, userSetBtn, goToPageBtn } = indexConfig || {};
    const sidebar = (
      <SildUserWarp>
        <UserPhoto />
        <UserInfo {...userInfo} />
        <Recharge userSlidBtn={userSlidBtn || []} />
        <Setting userSetBtn={userSetBtn} onClickBar={this.props.onClickBar} />
        <SlideList goToPageBtn={goToPageBtn} />
      </SildUserWarp>
    );
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
        open={userSildFalg}
        onOpenChange={this.openUserSlidChange}
      >
        <div className={styles.layout}>
          <DistributeHeder
            isLogin={isLogin}
            onChangeTab={this.onChangeTab}
            onTabClick={this.onTabClick}
            onLogin={this.onLogin}
            listViewScrollTop={listViewScrollTop}
            onLeftClick={this.openUserSlidChange}
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
          callbackWhenConfirm={this.onFeedbackModalClose}
          feedbackModalClose={this.onFeedbackModalClose}
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
  tabs: makeTabs,
  feedbackModal: makeListFeedbackModal,
  userInfo: makeUserInfo,
  isLogin: makeIsLogin,
  userSildFalg: makeUserSildFalg,
  indexConfig: makeIndexConfig
});

const mapDispatchToProps = dispatch => ({
  setScrollTop: scrollTop => dispatch(setListViewScrollTop(scrollTop)),
  onSetCeilingFlag: ceilingFlag => dispatch(setCeilingFlag(ceilingFlag)),
  setPathName: pathName => dispatch(setPathName(pathName)),
  setTabKey: params => dispatch(setTabKey(params)),
  onSetFeedbackModal: feedbackModal =>
    dispatch(setFeedbackModal(feedbackModal)),
  onInitPage: () => dispatch(initPage()),
  onClickBar: typeText => dispatch(initClickBar(typeText)),
  onOpenUserSlidChange: userSildFalg => dispatch(changeUserSild(userSildFalg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
