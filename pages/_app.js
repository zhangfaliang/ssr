import React from "react";
import App, { Container } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { NextSeo } from "next-seo";
import createStore from "../models/store";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { setPathName, getUser } from "../models/global/actions";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};
//在页面更改之间保持布局
//导航页面时保持状态
//使用componentDidCatch进行自定义错误处理
//将其他数据注入页面（例如，通过处理GraphQL查询）
const DynamicGlobalLayouComponent = dynamic({
  loader: () => import("../Layouts/Layout/index"),
  loading: () => <p>Loading ...</p>
});
class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <DynamicGlobalLayouComponent>{children}</DynamicGlobalLayouComponent>
    );
  }
}

class MyApp extends App {
  //如果您有阻止数据要求，则仅取消注释此方法
  // 应用程序中的每一页。这会禁用此功能
  //执行自动静态优化，导致应用中的每个页面都出现
  //是服务器端呈现的。
  //在App中添加自定义getInitialProps将影响自动预渲染

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const { store, isServer, pathname, apiData } = ctx;
    store.dispatch(setPathName(pathname));
    store.dispatch(getUser());

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }
  componentDidCatch(error, errorInfo) {
    console.log("CUSTOM ERROR HANDLING", error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <NextSeo config={SEO} />
        <Container>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Container>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
