export default ()=>
<p style = {{color:'red'}}>
  hi there
</p>
/**
 * 可以使用任何现有的CSS-in-JS解决方案。最简单的是内联样式：
 * 要使用更复杂的CSS-in-JS解决方案，通常必须为服务器端呈现实现样式刷新。
 * 我们通过允许您定义自定义的<Document>组件来封装每个页面，从而实现这一点。
 * https://github.com/zeit/next.js#user-content-custom-document
 */