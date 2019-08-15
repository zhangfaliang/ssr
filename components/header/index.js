import { Icon, Avatar, Badge, Row, Col, Input } from "antd";
import DrawerComponent from "../drawer";

const { Search } = Input;
import styles from "./index.less";
class Header extends React.Component {
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

  render() {
    return (
      <Row gutter={24}>
        <Col span={24}>
          <Row gutter={24}>
            <Col span={2}>
              <Icon
                type={"menu-fold"}
                onClick={this.showDrawer}
                width={4}
                height={5}
              />
            </Col>
            <Col span={4}>
              <Badge dot>
                <Avatar shape="square" icon="user" />
              </Badge>
            </Col>
            <Col span={10}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={24}>
              <div className={styles.bootom}>bootom</div>
            </Col>
          </Row>
          <DrawerComponent
            onClose={this.onClose}
            visible={this.state.visible}
          />
        </Col>
      </Row>
    );
  }
}

export default Header;
