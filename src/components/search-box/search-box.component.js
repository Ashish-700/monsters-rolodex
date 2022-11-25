import { Component } from "react";
//styles
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={`${this.props.className} search-box`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
