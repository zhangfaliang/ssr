import { SearchBar, Button, WhiteSpace, WingBlank } from "antd-mobile";

class Search extends React.Component {
  state = {
    value: "美食"
  };

  onChange = value => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: "" });
  };
  handleClick = () => {};
  render() {
    return (
      <SearchBar
        cancelText="|"
        showCancelButton={false}
        placeholder="Search"
        onSubmit={value => console.log(value, "onSubmit")}
        onClear={value => console.log(value, "onClear")}
        onFocus={() => console.log("onFocus")}
        onBlur={() => console.log("onBlur")}
        onCancel={() => console.log("onCancel")}
        onChange={this.onChange}
      />
    );
  }
}

export default Search;
