import React, { PureComponent } from "react";
import classnames from "classnames";
import { ListView, NavBar, Icon } from "antd-mobile";
import styles from "./index.less";
import Banner from "../banner/index";

const data = [
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    des: "不是所有的兼职汪都需要风吹日晒",
    preFixCls: "default",
    title: "海贼王",
    rightLabel: ["冒险", "奇幻"],
    leftIconType: 'fire',
    rightBtnText: '关注'
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    des: "不是所有的兼职汪都需要风吹日晒",
    preFixCls: "default",
    title: "海贼王",
    rightLabel: ["冒险", "奇幻"],
    leftIconType: 'yanjing',
    rightBtnText: '查看'
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    des: "不是所有的兼职汪都需要风吹日晒",
    preFixCls: "default",
    title: "海贼王",
    rightLabel: ["冒险", "奇幻"],
    leftIconType: 'jingpin-',
    rightBtnText: '浏览'
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    des: "作者：玩儿翁",
    preFixCls: "default",
    title: "海贼王",
    leftLabel: ["冒险"],
    righIconType: 'close',
    rightText: '全集',
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    des: "作者：玩儿翁",
    preFixCls: "default",
    title: "海贼王",
    leftLabel: ["冒险"],
    righIconType: 'close',
    rightText: '全集',
  }, {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    des: "作者：玩儿翁",
    preFixCls: "default",
    title: "海贼王",
    leftLabel: ["冒险"],
    showRightBtn: false,
    righIconType: 'close',
    rightText: '全集',

  }
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = pIndex * NUM_ROWS + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class ListViewComponent extends PureComponent {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.state = {
      dataSource,
      isLoading: true
    };
  }
  onScroll = e => {
    this.props.onScroll(e.target.scrollTop);
  };

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = event => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log("reach end", event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false
      });
    }, 1000);
  };

  render() {
    const { ceilingFlag, IndexRow } = this.props;
    let index = data.length - 1;
    const listViewCls = classnames({
      [styles["listView-wrap"]]: true,
      [styles.ceiling]: ceilingFlag
    });
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: "#F5F5F9",
          height: 8,
          borderTop: "1px solid #ECECED",
          borderBottom: "1px solid #ECECED"
        }}
      />
    );
    return (
      <ListView
        scrollEventThrottle={300}
        ref={el => (this.lv = el)}
        dataSource={this.state.dataSource}
        renderHeader={() => (
          <div className={styles.banner}>
            <Banner />
          </div>
        )}
        renderFooter={() => (
          <div style={{ padding: 30, textAlign: "center" }}>
            {this.state.isLoading ? "Loading..." : "Loaded"}
          </div>
        )}
        renderRow={(rowData, sectionID, rowID) => {
          if (index < 0) {
            index = data.length - 1;
          }
          const obj = data[index--];
          return <IndexRow data={obj} rowData={rowData} sectionID={sectionID} rowID={rowID} />
        }}
        renderSeparator={separator}
        className={`am-list ${listViewCls}`}
        pageSize={4}
        onScroll={this.onScroll}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}
ListViewComponent.defaultProps = {
  onScroll: () => { }
};

export default ListViewComponent;
