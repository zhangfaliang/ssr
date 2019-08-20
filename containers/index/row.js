import React from "react";
import { SelfdomTitle, SelfdomImg } from "../../components/recommend";
class IndexRow extends React.PureComponent {
  render() {
    const { rowData, sectionID, rowID, data } = this.props;
    return (
      <div>
        <SelfdomTitle {...data} />
        <SelfdomImg />
      </div>
    );
  }
}

export default IndexRow;
