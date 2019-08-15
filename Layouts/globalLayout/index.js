import { Row, Col } from "antd";
import styles from "./idnex.less";
import Header from "../../components/header";
import Footer from "../../components/footer";
class App extends React.Component {
  state = { visible: false, placement: "left" };

  showDrawer = () => {
    this.setState({
      visible: true,
      collapsed: false
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  //<div className={styles.main}>{/* {children} */}</div>
  render() {
    const { children } = this.props;
    return (
      <Row gutter={24}>
        <Col span={24}>
          <Row gutter={8}>
            <Col span={24}>
              <Header />
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={24}>main</Col>
          </Row>
          <Row gutter={8}>
            <Col span={24}>
              <Footer />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default App;
