import { Icon } from "antd";
import DrawerComponent from "../drawer";
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
      <herder className={styles.header}>
        <Icon
          className="trigger"
          type={"menu-unfold"}
          onClick={this.showDrawer}
        />
        <DrawerComponent onClose={this.onClose} visible={this.state.visible} />
      </herder>
    );
  }
}

export default Header;
