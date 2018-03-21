import React from 'react'
/**
 * 当您需要状态，生命周期挂钩或初始数据填充时，您可以导出React.Component（而不是如上所示的无状态函数）：
 */
export default class extends  React.Component{
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }
  render(){
    return (
      <div>
        hello Word { this.props.userAgent}
      </div>
    )
  }
}
/**
 * 请注意，要在页面加载时加载数据，我们使用getInitialProps，它是一种异步静态方法。它可以异步获取任何解析为JavaScript普通对象的东西，该普通对象会填充道具。在服务器呈现时，

从getInitialProps返回的数据被序列化，类似于JSON.stringify。确保getInitialProps返回的对象是一个普通对象，不使用Date，Map或Set。 

对于初始页面加载，getInitialProps将仅在服务器上执行。只有在通过链接组件或使用路由API导航到不同路由时，才会在客户端上执行
 */