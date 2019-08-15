import { Menu, Icon } from "antd";
import styles from './index.less';

class Footer extends React.Component {
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
    return (
      <footer className={styles.footer}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Icon type="mail" />
           首页
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />
           排序
          </Menu.Item>
          <Menu.Item key="app1">
            <Icon type="appstore" />
           金币
          </Menu.Item>
          <Menu.Item key="app2">
            <Icon type="appstore" />
           刷新
          </Menu.Item>
        </Menu>
      </footer>
    );
  }
}

export default Footer;
