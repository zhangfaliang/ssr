import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  //<Document>的getInitialProps函数在客户端转换期间不会被调用，也不会在页面自动预呈现时调用。
  //自定义<Document>还可以包含getInitialProps，用于表示异步服务器呈现数据要求。
  //这允许您支持CSS-in-JS库的服务器端渲染，如样式组件或情感。注意，默认情况下，styled-jsx包含在Next.js中
  //注意：确保检查是否在getInitialProps中定义了ctx.req / ctx.res。当页面静态导出以进行下一次导出或自动预渲染（静态优化）时，这些变量将不确定。
  //像onClick这样的事件处理程序无法添加到此文件中
  //注意：浏览器不会初始化<Main />之外的React组件。不要在这里添加应用程序逻辑。如果您需要在所有页面中共享组件（如菜单或工具栏），请查看<App>组件。

  //注意：如果您有一个带有getInitialProps的自定义<Document>，
  //请确保在假定页面是服务器端呈现之前检查是否定义了ctx.req。对于预呈现的页面，将不定义ctx.req。
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      //renderPage（Function）一个回调，它执行实际的React渲染逻辑（同步）。装饰这个函数是有用的，以支持服务器渲染包装器，如Aphrodite的renderStatic。
      //🚧应该注意的是，您应该自定义renderPage的唯一原因是使用css-in-js库，这些库需要将应用程序包装到服务器呈现中。 🚧

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
          enhanceComponent: Component => Component
        });
      //使用现在包含我们自定义`renderPage`的`ctx`运行父`getInitialProps`
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <script src='static/adaptive.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
