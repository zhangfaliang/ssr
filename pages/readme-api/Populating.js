import Head from  'next/head'
export default ()=>
  <div>
    <Head>
      <title> My page Title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>hello word</p>
  </div>
  /**
   * 我们公开了一个内置组件，用于将元素附加到页面的<head>。
   * 为了避免在<head>中出现重复的标签，你可以使用key属性来确保标签只被呈现一次：
   * 在这种情况下，只呈现第二个。 

注意：卸载组件时会清除的内容，因此请确保每个页面在中完全定义它所需的内容，而不对其他页面添加进行假设
   */