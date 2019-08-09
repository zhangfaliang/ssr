//自定义错误处理

import React from "react";
//import Error from "next/error";
import fetch from "isomorphic-unfetch";
//重用内置错误页面 如果要渲染内置错误页面，可以使用next / error：
//如果您已创建自定义错误页面，则必须从./_error而不是next / error导入自己的_error组件。
//如果要传递文本消息和statusCode，Error组件也会将title作为属性。

// class Page extends React.Component {
//   static async getInitialProps() {
//     const res = await fetch("https://api.github.com/repos/zeit/next.js");
//     const errorCode = res.statusCode > 200 ? res.statusCode : false;
//     const json = await res.json();

//     return { errorCode, stars: json.stargazers_count };
//   }

//   render() {
//     if (this.props.errorCode) {
//       return <Error statusCode={this.props.errorCode} />;
//     }

//     return <div>Next stars: {this.props.stars}</div>;
//   }
// }
class Error extends React.Component {
    static getInitialProps({ res, err }) {
      const statusCode = res ? res.statusCode : err ? err.statusCode : null
      return { statusCode }
    }

    render() {
      return (
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      )
    }
  }

export default Error;


