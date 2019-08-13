import Link from "next/link";
import { connect } from "react-redux";
import Counter from "../components/counter";
import Clock from "../components/clock";
import { Button, Input } from "antd";

const { Search } = Input;

function Page({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title
}) {
  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
      />

      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default connect(state => state)(Page);
