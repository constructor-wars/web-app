import React from "react";
import Searchbar from "./Searchbar";
import renderer from "react-test-renderer";

describe("Searchbar", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Searchbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
