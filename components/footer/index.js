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
        werwe
      </footer>
    );
  }
}

export default Footer;
