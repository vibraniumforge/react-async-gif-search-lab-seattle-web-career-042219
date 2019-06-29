import React, { Component } from "react";

class GifList extends Component {
  render() {
    const gifs = this.props.returnedData.map((item, index) => {
      return (
        <li style={{ listStyleType: "none" }} key={index}>
          <img src={item.images.original.url} alt="" />
        </li>
      );
    });
    return (
      <React.Fragment>
        <ul>{gifs}</ul>
      </React.Fragment>
    );
  }
}
export default GifList;
