import React, { Component } from "react";
import { get } from "lodash";
import { PATH_NAME_DISTRIBUTE_KEY } from "../../constants/index";
import DetailFooter from "./detailFooter";
import HomeFooter from "./index";
class DistributeFooter extends Component {
  render() {
    const { pathname } = this.props;
    const processFooter = {
      [PATH_NAME_DISTRIBUTE_KEY.HOME]: <HomeFooter {...this.props} />,
      [PATH_NAME_DISTRIBUTE_KEY.INDEX]: <HomeFooter {...this.props} />,
      [PATH_NAME_DISTRIBUTE_KEY.DETAIL]: <DetailFooter {...this.props} />
    };
    return get(processFooter, pathname, processFooter[PATH_NAME_DISTRIBUTE_KEY.HOME]);
  }
}

export default DistributeFooter;
