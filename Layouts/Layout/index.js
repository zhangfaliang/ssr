import classnames from "classnames";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styles from "./idnex.less";
import Header from "../../components/header";
import FooterBar from "../../components/footer";
import DrawerComponent from "../../components/drawer";
import  { widthHeader }  from '../../decorator/index';
import { setListViewScrollTop } from "../../models/global/actions";
import { makeListViewScrollTop } from "../../models//global/selects";

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
    const {
      children,
      mainNoScroll,
      setScrollTop,
      listViewScrollTop
    } = this.props;
    const { isDrawerOpen } = this.state;
    const mainCls = classnames({
      [styles.main]: true,
      [styles["no-scroll"]]: mainNoScroll
    });
    return (
      <div className={styles.layout}>
        <Header
          listViewScrollTop={listViewScrollTop}
          onLeftClick={this.onLeftClick}
        />
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
Layout.defaultProps = {
  mainNoScroll: true
};
const mapStateToProps = createStructuredSelector({
  listViewScrollTop: makeListViewScrollTop
});

const mapDispatchToProps = dispatch => ({
  setScrollTop: scrollTop => dispatch(setListViewScrollTop(scrollTop))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
