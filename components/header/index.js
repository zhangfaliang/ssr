
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
    return <>werwer</>
  }
}

export default Header;
