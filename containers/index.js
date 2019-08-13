import { connect } from "react-redux";
import Counter from "../components/counter";
import Clock from "../components/clock";
import { Tabs, Row, Col } from "antd";
import Banner from '../components/banner/index'
const { TabPane } = Tabs;

const tabPanes = [
  { tab: '首页', content: ({ lastUpdate, light }) => (<Clock lastUpdate={lastUpdate} light={light} />) },
  { tab: '冒险', content: () => (<Counter />) },
  {
    tab: '搞笑', content: ({ placeholderData, error }) => {
      return placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
          {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        </pre>
      )
    }

  },
  { tab: '首页', content: ({ lastUpdate, light }) => (<Clock lastUpdate={lastUpdate} light={light} />) },
  { tab: '冒险', content: () => (<Counter />) },
  {
    tab: '搞笑', content: ({ placeholderData, error }) => {
      return placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
          {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        </pre>
      )
    }

  },
  { tab: '首页', content: ({ lastUpdate, light }) => (<Clock lastUpdate={lastUpdate} light={light} />) },
  { tab: '冒险', content: () => (<Counter />) },
  {
    tab: '搞笑', content: ({ placeholderData, error }) => {
      return placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
          {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        </pre>
      )
    }

  },
  { tab: '首页', content: ({ lastUpdate, light }) => (<Clock lastUpdate={lastUpdate} light={light} />) },
  { tab: '冒险', content: () => (<Counter />) },
  {
    tab: '搞笑', content: ({ placeholderData, error }) => {
      return placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
          {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        </pre>
      )
    }

  },
  { tab: '首页', content: ({ lastUpdate, light }) => (<Clock lastUpdate={lastUpdate} light={light} />) },
  { tab: '冒险', content: () => (<Counter />) },
  {
    tab: '搞笑', content: ({ placeholderData, error }) => {
      return placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
          {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
        </pre>
      )
    }

  },
]

function Page({
  error,
  lastUpdate,
  light,
  placeholderData,
}) {
  return (
    <Row gutter={20}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <Tabs defaultActiveKey="1" size={'large'}>
          {tabPanes.map((item, index) => {
            const { content, tab } = item;
            return (<TabPane tab={tab} key={index}>
              {content({ lastUpdate, light, placeholderData, error })}
            </TabPane>)
          })}
        </Tabs>
      </Col>
    </Row>
  );
}

export default connect(state => state)(Page);
