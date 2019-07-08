import React from "react";

const GifList = props => {
  return (
    <ul>
      {props.returnedData.map(gif => {
        return (
          <li key={props.returnedData.id} style={{ listStyleType: "none" }}>
            <img src={gif.images.original.url} alt="" />
          </li>
        );
      })}
    </ul>
  );
};

export default GifList;
