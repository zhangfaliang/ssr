export default ()=>
<div>
  hello world 
  <p>
    scoped !
  </p>
  <style jsx>
    {
      `
      p{
        color:blue;
      }
      div{
        background:red;
      }
      @media (max-width:600px){
        div{
          background:blue;
        }
      }
      `
    }
  </style>
  <style global jsx>{
    `
    body{
      background:black;
      }
    `
  }
  </style>
</div>
/**
 * 我们捆绑了styled-jsx来为孤立的范围化CSS提供支持。
 * 其目的是支持类似于Web组件的“阴影CSS”，但不幸的是，它不支持服务器渲染，并且仅支持JS。

 */