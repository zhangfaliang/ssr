import { Drawer } from "antd-mobile";
import styles from "./idnex.less";
import Header from "../../components/header";
import FooterBar from "../../components/footer";
import DrawerComponent from "../../components/drawer";

class App extends React.Component {
  state = { visible: false, placement: "left", isDrawerOpen: false };
  showDrawer = () => {
    this.setState({
      visible: true,
      collapsed: false
    });
  };
  onLeftClick = isDrawerOpen => {
    console.log(isDrawerOpen, "00000");
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  };
  onOpenChange = isDrawerOpen => {
    console.log(isDrawerOpen, "888");
    this.setState({
      isDrawerOpen
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    const { children } = this.props;
    const { isDrawerOpen } = this.state;
    return (
      <div className={styles.layout}>
        <Header onLeftClick={this.onLeftClick} />
        <main className={styles.main}>
          <DrawerComponent onOpenChange={this.onOpenChange} open={isDrawerOpen}>
            {children}
          </DrawerComponent>
        </main>
        <FooterBar />
      </div>
    );
  }
}

export default App;
