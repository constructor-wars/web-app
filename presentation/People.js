import React, { Component } from "react";

const images = {
  Jose: "https://avatars2.githubusercontent.com/u/19479459?s=96&v=4",
  Rafal: "https://avatars1.githubusercontent.com/u/36113728?s=96&v=4",
  Ethan: "https://avatars0.githubusercontent.com/u/37446513?s=96&v=4 ",
  Julius: "https://avatars3.githubusercontent.com/u/35594681?s=96&v=4",
  James: "https://avatars2.githubusercontent.com/u/1286700?s=96&v=4"
};

export default class People extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {Object.entries(images).map(([name, src]) => (
          <div style={{ padding: "2em" }}>
            <img src={src} />
            <div>{name}</div>
          </div>
        ))}
      </div>
    );
  }
}
