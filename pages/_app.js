import React from "react";
import App, { Container } from "next/app";
import dynamic from 'next/dynamic'

const DynamicGlobalLayouComponent= dynamic({
  loader: () => import("../Layouts/globalLayout/index"),
  loading: () => <p>Loading ...</p>
});

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return <DynamicGlobalLayouComponent>{children}</DynamicGlobalLayouComponent>;
  }
}

export default class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    console.log("CUSTOM ERROR HANDLING", error);
    // This is needed to render errors correctly in development / production
    super.componentDidCatch(error, errorInfo);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
