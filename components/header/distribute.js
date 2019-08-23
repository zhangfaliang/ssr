import React, { Component } from "react";
import { get } from "lodash";
import HomeHeder from "./index";
import DetailHeader from "./detailHeader";
import { PATH_NAME_DISTRIBUTE_KEY } from "../../constants/index";

class DistributeHeder extends Component {
  render() {
    const { pathname } = this.props;
    const processHeader = {
      [PATH_NAME_DISTRIBUTE_KEY.HOME]: <HomeHeder {...this.props} />,
      [PATH_NAME_DISTRIBUTE_KEY.INDEX]: <HomeHeder {...this.props} />,
      [PATH_NAME_DISTRIBUTE_KEY.DETAIL]: <DetailHeader {...this.props} />
    };
    return get(processHeader, pathname, PATH_NAME_DISTRIBUTE_KEY.HOME);
  }
}
DistributeHeder.defaultProps = {
  pathname: "/",
  onChangeTab: () => {},
  onTabClick: () => {},
};
export default DistributeHeder;
