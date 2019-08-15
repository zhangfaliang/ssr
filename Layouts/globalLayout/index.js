import { Layout, Menu, Icon, Row, Col, Input } from "antd";
const { Search } = Input;
import { isEmpty } from "lodash";
const { Header, Content, Sider } = Layout;
import LoginComponent from '../../components/loginComponent'
import styles from "./idnex.less";
// import vl from "umi-hd";
// !isEmpty(window) && vl();

class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const {
      children,
      seachPlaceholder,
      onSearch,
      placeholder,
      enterButton
    } = this.props;

    return (
      <Row className={styles.layout} gutter={24}>
        <Col span={24}>

          <Layout className={styles.leftLayout}>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Row gutter={24}>

                <Col offset={1} className={styles.search} span={16}>
                  <Search
                    placeholder={placeholder}
                    enterButton={enterButton}
                    size="large"
                    onSearch={onSearch}
                  />
                </Col>
                <Col offset={0} className={styles.search} span={7}>
                  <LoginComponent></LoginComponent>
                </Col>
              </Row>
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              {children}
            </Content>
          </Layout>
        </Col>
      </Row>
    );
  }
}

SiderDemo.defaultProps = {
  seachPlaceholder: "input search text",
  onSearch: value => console.log(value),
  placeholder: "input search text",
  enterButton: "Search"
};

export default SiderDemo;
