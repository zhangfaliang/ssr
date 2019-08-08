import styles from "./index.less";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

function Home({ stars }) {
  const pids = ["id1", "id2", "id3"];

  return (
    <div className={styles.index}>
      <Head>
        <title>mytest</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {pids.map(pid => (
        <Link key={pid} href="/post/[pid]" as={`/post/${pid}`}>
          <a>Post {pid}</a>
        </Link>
      ))}
      Welcome to Next.js!
      {stars}
      {/* <img src="/static/img/3.png" alt="" /> */}
    </div>
  );
}
Home.getInitialProps = async ({ req, pathname, query, asPath, res, err }) => {
  // 如果你在getInitialProps中使用一些仅服务器模块，请确保正确导入它们，否则，它会减慢你的应用程序。
  //对于初始页面加载，getInitialProps将仅在服务器上执行。只有在通过链接组件或使用路由API导航到不同路由时，才会在客户端上执行
  const res1 = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res1.json();
  return { stars: json.stargazers_count };
};
export default Home;
