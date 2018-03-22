export default ()=><div>Welcome to next.js</div>
/**
 * Next.js 4仅支持React 16。 由于React 16的工作方式以及我们如何使用它，我们不得不放弃React 15支持。{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}这样将一个脚本添加到你的package.json中：
之后，文件系统是主要的API。每个.js文件都会成为自动处理和呈现的路径。
在项目中填充./pages/index.js：
然后运行npm run dev并转到http：// localhost：3000。要使用另一个端口，可以运行npm run dev - -p <您的端口>。
到目前为止，我们得到： 自动转码和捆绑（使用webpack和babel） 热码重新加载 服务器渲染和索引./页面 静态文件服务。 ./static/is mapped / static /
https://github.com/now-examples/nextgram/blob/master/readme.md
 */