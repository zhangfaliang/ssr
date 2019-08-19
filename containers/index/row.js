import React from "react";
import { SelfdomTitle } from "../../components/recommend";
class IndexRow extends React.PureComponent {
  render() {
    const { rowData, sectionID, rowID, data } = this.props;
    return (
      <div>
        <SelfdomTitle {...data} />
      </div>
    );
  }
}

export default IndexRow;
