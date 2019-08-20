import React from "react";
import { SelfdomTitle, SelfdomImg, SelfdomDes } from "../../components/recommend";
class IndexRow extends React.PureComponent {
  render() {
    const { rowData, sectionID, rowID, data } = this.props;
    return (
      <div>
        <SelfdomTitle {...data} />
        <SelfdomImg />
        <SelfdomDes />
      </div>
    );
  }
}

export default IndexRow;
