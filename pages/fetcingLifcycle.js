//如果您在getInitialProps中使用某些仅限服务器的模块，请确保正确导入它们。否则，它会减慢你的应用程序。
//您还可以为无状态组件定义getInitialProps生命周期方法：
import 'isomorphic-unfetch'


 const Page = ({stars,res,args})=>{
   console.log(args)
   return(<div>
          Next statrs :{stars}
        </div>)
 }
  

Page.getInitialProps = async ({req})=>{
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return{ stars: json.stargazers_count,res,args:arguments}
}

export default Page;
/**
 * getInitialProps接收具有以下属性的上下文对象：

pathname - URL的路径部分
query - 作为对象解析的URL的查询字符串部分
asPath - 实际路径（包括查询）在浏览器中显示的字符串
req - HTTP请求对象（仅限服务器）
res - HTTP响应对象（仅限服务器）
jsonPageRes - 获取Response对象（仅客户端）
err - 在呈现过程中遇到任何错误时的错误对象
 */
