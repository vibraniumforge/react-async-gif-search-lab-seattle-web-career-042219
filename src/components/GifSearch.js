import React from "react";

const GifSearch = props => {
  return (
    <React.Fragment>
      <form id="search-bar" onSubmit={props.handleSubmit}>
        <input
          type="text"
          id="search-bar-input"
          name="search"
          value={props.queryTerm}
          onChange={props.handleSearchChange}
        />
        <br />
        <input
          type="submit"
          id="search-bar-button"
          name="search"
          value="Search"
        />
      </form>{" "}
    </React.Fragment>
  );
};

export default GifSearch;
