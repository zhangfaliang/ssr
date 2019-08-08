import App, { Container } from "next/app";
import React from "react";
import Link from "next/link";
import Router from "next/router";
// const handleRouteChange = url => {
//     console.log('App is changing to: ', url)
//   }
// Router.events.on('routeChangeStart', handleRouteChange)
// Router.events.off('routeChangeStart', handleRouteChange)
// Router.events.on('routeChangeError', (err, url) => {
//     if (err.cancelled) {
//       console.log(`Route to ${url} was cancelled!`)
//     }
//   })
// 注意：不鼓励在getInitialProps中使用路由器事件，因为它可能会导致意外行为。
// 当组件安装（useEffect或componentDidMount / componentWillUnmount）时，或者当事件发生时必须注册路由器事件
class HelloUA extends React.Component {
  //
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    const href = "/about?counter=10";
    const as = href;

    console.log(this.props, "-------------");
    return (
      <div>
        <>
          <a onClick={() => setTimeout(() => router.push("/dynamic"), 100)}>
            A route transition will happen after 100ms
          </a>
          {// and we can prefetch it!
          router.prefetch("/dynamic")}
        </>
        Hello World {this.props.userAgent}
        <Link scroll={false} href="/?counter=10">
          <a>Disables scrolling</a>
        </Link>
        <Link href="/?counter=10">
          <a>Changes with scrolling to top</a>
        </Link>
        Click{" "}
        <Link href={{ pathname: "/about", query: { name: "Zeit" } }}>
          <a>here</a>
        </Link>{" "}
        to read more
        <ul>
          <li>Home</li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
        <h1>This is our homepage.</h1>
        Click{" "}
        <span onClick={() => Router.push(href, as, { shallow: true })}>
          here
        </span>{" "}
        to read more
        <Link href="/about" prefetch href="/about">
          <a>About</a>
        </Link>
      </div>
    );
  }
}

export default HelloUA;
