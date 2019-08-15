import styles from "./idnex.less";
import Header from "../../components/header";
import Footer from "../../components/footer";
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
  //<div className={styles.main}>{/* {children} */}</div>
  render() {
    const { children } = this.props;
    return (
      <div className={styles.layout}>
        <header className={styles.header}>
         werwer
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>  

        werwer    
        </footer>
      </div>
    );
  }
}

export default App;
