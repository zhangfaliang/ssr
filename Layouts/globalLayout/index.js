import { Layout, Menu, Icon, Row, Col, Input } from "antd";
const { Search } = Input;
const { Header, Content, Sider } = Layout;
import styles from "./idnex.less";

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
      <Row className={styles.layout}>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>用户</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>视频</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>下载</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className={styles.leftLayout}>
            <Header  style={{ background: "#fff", padding:0 }}>
              <Row gutter="24">
                <Col span="2">
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={this.toggle}
                  />
                </Col>
                <Col span="16">
                  <Search
                    placeholder={placeholder}
                    enterButton={enterButton}
                    size="large"
                    onSearch={onSearch}
                  />
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
        </Layout>
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
