import React from "react";
import Logo from "./Logo";
import renderer from "react-test-renderer";

describe("Logo", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Logo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
