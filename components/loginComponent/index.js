import styles from "./index.less";

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
       werwer
      </div>
    );
  }
}

export default LoginComponent;
