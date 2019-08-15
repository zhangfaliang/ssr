import { Drawer } from "antd";
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
      <Drawer
        title=""
        placement={placement}
        closable={false}
        onClose={this.onClose}
        visible={this.state.visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  }
}
DrawerComponent.defaultProps = {
  placement: "left",
  visible: false,
  onClose: () => {}
};

export default DrawerComponent;
