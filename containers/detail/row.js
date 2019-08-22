import Router from "next/router";
import React from "react";
import {
  SelfdomTitle,
  SelfdomImg,
  SelfdomDes
} from "../../components/recommend";
import DatailImgList from "../../components/detailImgList";

class IndexRow extends React.PureComponent {
  clickImg = () => {
    const { rowData, sectionID, rowID, data } = this.props;
    Router.push("/detail");
  };
  render() {
    const { rowData, sectionID, rowID, data } = this.props;

    return (
      <div>
        <DatailImgList />
      </div>
    );
  }
}

export default IndexRow;
