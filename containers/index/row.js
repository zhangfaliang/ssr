import Router from "next/router";
import React from "react";
import {
  SelfdomTitle,
  SelfdomImg,
  SelfdomDes
} from "../../components/recommend";
class IndexRow extends React.PureComponent {
  clickImg = () => {
    const { rowData, sectionID, rowID, data } = this.props;
    Router.push("/detail");
  };
  render() {
    const { rowData, sectionID, rowID, data } = this.props;

    return (
      <div>
        <SelfdomTitle {...data} />
        <SelfdomImg clickImg={this.clickImg} imgSrc={data.imgSrc} />
        <SelfdomDes />
      </div>
    );
  }
}

export default IndexRow;
