import { Carousel, Button, WhiteSpace, WingBlank } from "antd-mobile";
import styles from "./index.less";
class Banner extends React.Component {
  state = {
    data: ["1", "2", "3"],
    imgHeight: 176
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          {
            targetUrl: "",
            imgUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822279&di=682ffeb2cfa018ec9555394777f5f304&imgtype=0&src=http%3A%2F%2F06.imgmini.eastday.com%2Fmobile%2F20171112%2F20171112021459_5ff9b777a766fc85180dbb4f88e3d8da_3.jpeg"
          },
          {
            targetUrl: "",
            imgUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566375487551&di=f51edf10ad99242234520ef11865721a&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1321819110%2C1691250646%26fm%3D214%26gp%3D0.jpg"
          },
          {
            targetUrl: "",
            imgUrl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566374822268&di=5ca64c7a699f6f62e4780be6fb6bfc41&imgtype=0&src=http%3A%2F%2Fimage2.sina.com.cn%2Fty%2Fk%2Fp%2F2007-03-31%2FU2137P6T12D2839481F44DT20070331123211.jpg"
          }
        ]
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank className={styles.banner}>
        <Carousel
          className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((item, index) => {
            const { imgUrl } = item;
            return (
              <a
                key={index}
                // href="http://www.alipay.com"
                style={{
                  display: "block",
                  position: "relative",
                  top: this.state.slideIndex === index ? -10 : 0,
                  height: this.state.imgHeight,
                  boxShadow: "2px 1px 1px rgba(0, 0, 0, 0.2)"
                }}
              >
                <img
                  src={imgUrl}
                  alt=""
                  style={{ width: "100%", verticalAlign: "top" }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event("resize"));
                    this.setState({ imgHeight: "auto" });
                  }}
                />
              </a>
            );
          })}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Banner;
