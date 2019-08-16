import styles from "./idnex.less";
import Header from "../../components/header";
import FooterBar from "../../components/footer";

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
  render() {
    const { children } = this.props;
    return (
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <FooterBar />
      </div>
    );
  }
}

export default App;
