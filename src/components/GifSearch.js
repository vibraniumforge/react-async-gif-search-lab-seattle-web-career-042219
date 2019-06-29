import React, { Component } from "react";

class GifSearch extends Component {
  handleChange = e => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <form id="search-bar">
          <input
            type="text"
            id="search-bar-input"
            name="search"
            value={this.props.queryTerm}
            onChange={this.props.handleSearchChange}
          />
          <br />
          <input
            type="submit"
            id="search-bar-button"
            name="search"
            value="search"
            onClick={this.props.handleSubmit}
          />
        </form>{" "}
      </React.Fragment>
    );
  }
}

export default GifSearch;
