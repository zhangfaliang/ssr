import cowsay from 'cowsay-browser';
export default ()=>
<pre>
  {
    cowsay.say({text:'hi there'})
  }
</pre>
/**
 * 自动代码分割
 * 您声明的每个导入都会被捆绑并随每个页面一起提供。这意味着页面不会加载不必要的代码
 */