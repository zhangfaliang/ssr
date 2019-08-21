import React, { PureComponent } from "react";
import classnames from "classnames";
import { ListView } from "antd-mobile";
import styles from "./index.less";
import Banner from "../banner/index";

const data = [
  {
    imgSrc:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566969497&di=8b6c8ca030f53683d24d3808a820d450&imgtype=jpg&er=1&src=http%3A%2F%2F03.imgmini.eastday.com%2Fmobile%2F20180505%2F20180505111711_266c2ddd3fce8000502daf0aa22325e2_4.jpeg",
    des: "不是所有的兼职汪都需要风吹日晒",
    preFixCls: "default",
    title: "海贼王",
    rightLabel: ["冒险", "奇幻"],
    leftIconType: "fire",
    rightBtnText: "关注"
  },
  {
    imgSrc:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374803013&di=5d3a1c7edd2f5c05792c79b18a2a0ea7&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20101224%2FImg278493118.jpg",
    des: "不是所有的兼职汪都需要风吹日晒",
    preFixCls: "default",
    title: "海贼王",
    rightLabel: ["冒险", "奇幻"],
    leftIconType: "yanjing",
    rightBtnText: "查看"
  },
  {
    imgSrc:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822260&di=69da4fe477a21245933bb12e92fdb4bf&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20090206%2FImg262091494.jpg",
    des: "不是所有的兼职汪都需要风吹日晒",
    preFixCls: "default",
    title: "海贼王",
    rightLabel: ["冒险", "奇幻"],
    leftIconType: "jingpin-",
    rightBtnText: "浏览"
  },
  {
    imgSrc:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822258&di=8ba9c89280b66552ae0ec9350bb5d72f&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20090120%2FImg261857600.jpg",
    des: "作者：玩儿翁",
    preFixCls: "default",
    title: "海贼王",
    leftLabel: ["冒险"],
    righIconType: "close",
    rightText: "全集"
  },
  {
    imgSrc:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822257&di=ba17d50c0b69e8833f0c50e158cc9443&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20110503%2FImg280479381.jpg",
    des: "作者：玩儿翁",
    preFixCls: "default",
    title: "海贼王",
    leftLabel: ["冒险"],
    righIconType: "close",
    rightText: "全集"
  },
  {
    imgSrc:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822257&di=6aeca632856ec190f86e4c43d7657c5f&imgtype=0&src=http%3A%2F%2Fpic.gooooal.com%2Fimages%2F100381%2F100381157.jpg",
    des: "作者：玩儿翁",
    preFixCls: "default",
    title: "海贼王",
    leftLabel: ["冒险"],
    showRightBtn: false,
    righIconType: "close",
    rightText: "全集"
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
    const { IndexRow } = this.props;
    let index = data.length - 1;
    const listViewCls = classnames({
      [styles["listView-wrap"]]: true
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
          return (
            <IndexRow
              data={obj}
              rowData={rowData}
              sectionID={sectionID}
              rowID={rowID}
            />
          );
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
  onScroll: () => {}
};

export default ListViewComponent;
