import { Avatar, Menu, Icon, Button } from "antd";
import styles from "./index.less";
const { SubMenu } = Menu;

class LoginComponent extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    const { userInfo, isLogin } = this.props;
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                {isLogin || true ? (
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                ) : (
                  <div className={styles.notLogin}>
                    <Button type="primary">登录</Button>
                    <Button type="primary">注册</Button>
                  </div>
                )}
              </span>
            }
          >
            {isLogin || true ? (
              <Menu.ItemGroup>
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
            ) : (
              ""
            )}
            {/* <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup> */}
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default LoginComponent;
