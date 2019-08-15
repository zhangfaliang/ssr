import styles from "./index.less";

class DrawerComponent extends React.Component {
  state = { visible: false, placement: "left" };
  static getDerivedStateFromProps(props, state) {
    if (props.visible !== state.visible) {
      return {
        visible: props.visible
      };
    }
  }

  onClose = () => {
    this.setState(
      {
        visible: false
      },
      () => {
        this.props.onClose();
      }
    );
  };

  render() {
    const { placement } = this.props;
    return (
     
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
     
    );
  }
}
DrawerComponent.defaultProps = {
  placement: "left",
  visible: false,
  onClose: () => {}
};

export default DrawerComponent;
