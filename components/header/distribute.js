import React, { Component } from "react";
import { get } from "lodash";
import Router from "next/router";
import HomeHeder from "./index";
import DetailHeader from "./detailHeader";
import UserBanner from "../userBanner";
import { PATH_NAME_DISTRIBUTE_KEY } from "../../constants/index";

class DistributeHeder extends Component {
  login = () => {
    Router.push("/user/login/index");
  };
  sign = () => {
    Router.push("/user/signin/index");
  };
  render() {
    const { pathname } = this.props;
    const processHeader = {
      [PATH_NAME_DISTRIBUTE_KEY.HOME]: <HomeHeder {...this.props} />,
      [PATH_NAME_DISTRIBUTE_KEY.INDEX]: <HomeHeder {...this.props} />,
      [PATH_NAME_DISTRIBUTE_KEY.DETAIL]: <DetailHeader {...this.props} />,
      [PATH_NAME_DISTRIBUTE_KEY.SIGN]: (
        <UserBanner
          clickCheckBtn={this.login}
          text="注册"
          btnText="去登录"
          {...this.props}
        />
      ),
      [PATH_NAME_DISTRIBUTE_KEY.LOGIN]: (
        <UserBanner
          clickCheckBtn={this.sign}
          text="登录"
          btnText="去注册"
          {...this.props}
        />
      ),
      [PATH_NAME_DISTRIBUTE_KEY.CHANGE_PWD]: (
        <UserBanner
          clickCheckBtn={this.login}
          {...this.props}
          text="修改密码"
          btnText="去登录"
        />
      )
    };
    return get(
      processHeader,
      pathname,
      processHeader[PATH_NAME_DISTRIBUTE_KEY.HOME]
    );
  }
}
DistributeHeder.defaultProps = {
  pathname: "/",
  onChangeTab: () => {},
  onTabClick: () => {}
};
export default DistributeHeder;
