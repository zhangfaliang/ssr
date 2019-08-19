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
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
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
          {this.state.data.map((val, index) => (
            <a
              key={val}
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
                src={`data:image/jpeg;base64,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`}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Banner;
