import classnames from "classnames";
import styles from "./idnex.less";
import Header from "../../components/header";
import FooterBar from "../../components/footer";
import DrawerComponent from "../../components/drawer";

class Layout extends React.Component {
  state = { visible: false, placement: "left", isDrawerOpen: false };
  showDrawer = () => {
    this.setState({
      visible: true,
      collapsed: false
    });
  };
  onLeftClick = isDrawerOpen => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  };
  onOpenChange = isDrawerOpen => {
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
    const { children, mainNoScroll } = this.props;
    const { isDrawerOpen } = this.state;
    const mainCls = classnames({
      [styles.main]: true,
      [styles["no-scroll"]]: mainNoScroll
    });
    return (
      <div className={styles.layout}>
        <Header onLeftClick={this.onLeftClick} />
        <main className={mainCls}>
          <DrawerComponent onOpenChange={this.onOpenChange} open={isDrawerOpen}>
            {children}
          </DrawerComponent>
        </main>
        <FooterBar />
      </div>
    );
  }
}
Layout.defaultProps={
  mainNoScroll:true
}
export default Layout;
