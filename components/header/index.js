import { Drawer, List, NavBar, Icon } from "antd-mobile";
import Header from "./header";
import styles from "./index.less";

class App1 extends React.Component {
  state = {
    open: false
  };
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  };
  render() {
    // fix in codepen
    const sidebar = (
      <List>
        {[0, 1, 2, 3, 4, 5, 6].map((i, index) => {
          if (index === 0) {
            return (
              <List.Item
                key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                multipleLine
              >
                Category
              </List.Item>
            );
          }
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            >
              Category{index}
            </List.Item>
          );
        })}
      </List>
    );

    return (
      <div className={styles["header-warp"]}>
          <Header onLeftClick={this.onOpenChange} />
        <Drawer
          className={`${styles.drawer} my-drawer `}
          enableDragHandle
          contentStyle={{
            color: "#A6A6A6",
            textAlign: "center",
            paddingTop: 42
          }}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
         <span></span>
        </Drawer>
      </div>
    );
  }
}

export default App1;
