import React from "react";
import { connect } from "react-redux";
import { NextSeo } from "next-seo";
import ListViewComponent from "../../components/listView";
import IndexRow from "./row";

class IndexPage extends React.PureComponent {
  onScroll = scrollTop => {
    const { parentProps } = this.props;
    const {
      listViewScrollTop,
      mainNoScroll,
      setScrollTop,
      ceilingFlag
    } = parentProps;
    setScrollTop(scrollTop);
  };
  render() {
    const {
      error,
      lastUpdate,
      light,
      placeholderData,
      parentProps
    } = this.props;
    const { ceilingFlag } = parentProps;
    return (
      <div>
        <NextSeo
          config={{
            title: "Page Meta Title",
            description: "This will be the page meta description",
            canonical: "https://www.canonicalurl.ie/",
            openGraph: {
              url: "https://www.canonicalurl.ie/",
              title: "Open Graph Title",
              description: "Open Graph Description",
              images: [
                {
                  url: "https://www.example.ie/og-image-01.jpg",
                  width: 800,
                  height: 600,
                  alt: "Og Image Alt"
                },
                {
                  url: "https://www.example.ie/og-image-02.jpg",
                  width: 900,
                  height: 800,
                  alt: "Og Image Alt Second"
                },
                { url: "https://www.example.ie/og-image-03.jpg" },
                { url: "https://www.example.ie/og-image-04.jpg" }
              ]
            }
          }}
        />
        <ListViewComponent
          IndexRow={IndexRow}
          onScroll={this.onScroll}
          ceilingFlag={ceilingFlag}
        />
      </div>
    );
  }
}

export default connect(state => state)(IndexPage);
