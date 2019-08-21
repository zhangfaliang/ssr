import classnames from "classnames";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styles from "./idnex.less";
import Header from "../../components/header";
import FooterBar from "../../components/footer";
import DrawerComponent from "../../components/drawer";
import { widthHeader } from "../../decorator/index";
import {
  setListViewScrollTop,
  setCeilingFlag
} from "../../models/global/actions";
import {
  makeListViewScrollTop,
  makeCeilingFlag
} from "../../models//global/selects";

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
  renderChildren() {
    const { children, ...other } = this.props;

    const childrens = React.Children.map(children, child => {
      return React.cloneElement(child, {
        parentProps: other
      });
    });
    return childrens;
  }
  render() {
    const {
      children,
      mainNoScroll,
      setScrollTop,
      listViewScrollTop,
      onSetCeilingFlag,
      ceilingFlag
    } = this.props;
    const { isDrawerOpen } = this.state;
    const mainCls = classnames({
      [styles.main]: true,
      [styles["no-scroll"]]: mainNoScroll
    });
    return (
      <div className={styles.layout}>
         <DrawerComponent
          onOpenChange={this.onOpenChange}
          open={isDrawerOpen}
          ceilingFlag={ceilingFlag}
          listViewScrollTop={listViewScrollTop}
          onSetCeilingFlag={onSetCeilingFlag}
          ceilingFlag={ceilingFlag}
          onLeftClick={this.onLeftClick}
        >
          {this.renderChildren()}
        </DrawerComponent>
        {/* <Header
          listViewScrollTop={listViewScrollTop}
          onLeftClick={this.onLeftClick}
          onSetCeilingFlag={onSetCeilingFlag}
          ceilingFlag={ceilingFlag}
        />
        <main className={mainCls}>
          <DrawerComponent
            onOpenChange={this.onOpenChange}
            open={isDrawerOpen}
            ceilingFlag={ceilingFlag}
          >
            {this.renderChildren()}
          </DrawerComponent>
        </main>
        <FooterBar /> */}
       
      </div>
    );
  }
}
Layout.defaultProps = {
  mainNoScroll: true
};
const mapStateToProps = createStructuredSelector({
  listViewScrollTop: makeListViewScrollTop,
  ceilingFlag: makeCeilingFlag
});

const mapDispatchToProps = dispatch => ({
  setScrollTop: scrollTop => dispatch(setListViewScrollTop(scrollTop)),
  onSetCeilingFlag: ceilingFlag => dispatch(setCeilingFlag(ceilingFlag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
