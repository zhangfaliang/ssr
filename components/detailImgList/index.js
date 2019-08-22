import React, { Component } from "react";
import { isArray } from "lodash";
import styles from "./index.less";

class DatailImgList extends Component {
  render() {
    const { imgList } = this.props;
    return (
      <div className={styles.list}>
        {isArray(imgList) &&
          imgList.map((item, index) => {
            return <img key={index} src={item} alt="" />;
          })}
      </div>
    );
  }
}

DatailImgList.defaultProps = {
  imgList: [
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822257&di=6aeca632856ec190f86e4c43d7657c5f&imgtype=0&src=http%3A%2F%2Fpic.gooooal.com%2Fimages%2F100381%2F100381157.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822257&di=6aeca632856ec190f86e4c43d7657c5f&imgtype=0&src=http%3A%2F%2Fpic.gooooal.com%2Fimages%2F100381%2F100381157.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822257&di=6aeca632856ec190f86e4c43d7657c5f&imgtype=0&src=http%3A%2F%2Fpic.gooooal.com%2Fimages%2F100381%2F100381157.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822257&di=6aeca632856ec190f86e4c43d7657c5f&imgtype=0&src=http%3A%2F%2Fpic.gooooal.com%2Fimages%2F100381%2F100381157.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822257&di=6aeca632856ec190f86e4c43d7657c5f&imgtype=0&src=http%3A%2F%2Fpic.gooooal.com%2Fimages%2F100381%2F100381157.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822257&di=6aeca632856ec190f86e4c43d7657c5f&imgtype=0&src=http%3A%2F%2Fpic.gooooal.com%2Fimages%2F100381%2F100381157.jpg",
  ]
};
export default DatailImgList;
