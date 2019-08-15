import { connect } from "react-redux";
import { NextSeo } from "next-seo";
import Counter from "../components/counter";
import Clock from "../components/clock";
import { Tabs, Row, Col } from "antd";
import Banner from "../components/banner/index";
const { TabPane } = Tabs;

const tabPanes = [
  {
    tab: "首页",
    content: ({ lastUpdate, light }) => (
      <Clock lastUpdate={lastUpdate} light={light} />
    )
  },
  { tab: "冒险", content: () => <Counter /> },
  {
    tab: "搞笑",
    content: ({ placeholderData, error }) => {
      return (
        placeholderData && (
          <pre>
            <code>{JSON.stringify(placeholderData, null, 2)}</code>
            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
          </pre>
        )
      );
    }
  },
  {
    tab: "首页",
    content: ({ lastUpdate, light }) => (
      <Clock lastUpdate={lastUpdate} light={light} />
    )
  },
  { tab: "冒险", content: () => <Counter /> },
  {
    tab: "搞笑",
    content: ({ placeholderData, error }) => {
      return (
        placeholderData && (
          <pre>
            <code>{JSON.stringify(placeholderData, null, 2)}</code>
            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
          </pre>
        )
      );
    }
  },
  {
    tab: "首页",
    content: ({ lastUpdate, light }) => (
      <Clock lastUpdate={lastUpdate} light={light} />
    )
  },
  { tab: "冒险", content: () => <Counter /> },
  {
    tab: "搞笑",
    content: ({ placeholderData, error }) => {
      return (
        placeholderData && (
          <pre>
            <code>{JSON.stringify(placeholderData, null, 2)}</code>
            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
          </pre>
        )
      );
    }
  },
  {
    tab: "首页",
    content: ({ lastUpdate, light }) => (
      <Clock lastUpdate={lastUpdate} light={light} />
    )
  },
  { tab: "冒险", content: () => <Counter /> },
  {
    tab: "搞笑",
    content: ({ placeholderData, error }) => {
      return (
        placeholderData && (
          <pre>
            <code>{JSON.stringify(placeholderData, null, 2)}</code>
            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
          </pre>
        )
      );
    }
  },
  {
    tab: "首页",
    content: ({ lastUpdate, light }) => (
      <Clock lastUpdate={lastUpdate} light={light} />
    )
  },
  { tab: "冒险", content: () => <Counter /> },
  {
    tab: "搞笑",
    content: ({ placeholderData, error }) => {
      return (
        placeholderData && (
          <pre>
            <code>{JSON.stringify(placeholderData, null, 2)}</code>
            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
          </pre>
        )
      );
    }
  }
];

function Page({ error, lastUpdate, light, placeholderData }) {
  return (
    <>
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
      <Row gutter={24}>
        <Col span={24}>
          <Banner />
        </Col>
        <Col span={24}>
          <Tabs defaultActiveKey="1" size={"large"}>
            {tabPanes.map((item, index) => {
              const { content, tab } = item;
              return (
                <TabPane tab={tab} key={index}>
                  {content({ lastUpdate, light, placeholderData, error })}
                </TabPane>
              );
            })}
          </Tabs>
        </Col>
      </Row>
    </>
  );
}

export default connect(state => state)(Page);
