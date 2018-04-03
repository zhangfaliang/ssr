//路由之间的客户端转换可以通过<Link>组件启用。考虑这两个页面：
 import Link from 'next/link'
 export default ()=>(
   <div>
     Click{' '}
     <Link href="/readme-api/user-static">
      <a> here</a>
     </Link>
     to tead more
   </div>
 )