import React, { Component } from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      returnedData: [],
      queryTerm: ""
    };
  }

  getCall = () => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${
        this.state.queryTerm
      }&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(res => res.json())
      .then(res => this.setState({ returnedData: res.data.slice(0, 3) }))
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.getCall();
  };

  handleSearchChange = e => {
    e.preventDefault();
    this.setState({ queryTerm: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <GifSearch
          handleSearchChange={this.handleSearchChange}
          handleSubmit={this.handleSubmit}
          queryTerm={this.state.queryTerm}
        />
        <GifList returnedData={this.state.returnedData} />
      </React.Fragment>
    );
  }
}

export default GifListContainer;
