import React, { Component } from "react";
import DatailImgList from "../../components/detailImgList";
import ListViewComponent from "../../components/listView";
import IndexRow from "./row";

class Detail extends Component {
  onScroll = scrollTop => {
    const { parentProps } = this.props;
    const {
      listViewScrollTop,
      mainNoScroll,
      setScrollTop,
      ceilingFlag
    } = parentProps;
    setScrollTop(scrollTop);
  };
  render() {
    const {
      error,
      lastUpdate,
      light,
      placeholderData,
      parentProps
    } = this.props;
    const { ceilingFlag } = parentProps;
    return (
      <div style={{ height: "100%" }}>
        <ListViewComponent
          IndexRow={IndexRow}
          onScroll={this.onScroll}
          ceilingFlag={ceilingFlag}
        />
        {/* <DatailImgList /> */}
      </div>
    );
  }
}

export default Detail;
