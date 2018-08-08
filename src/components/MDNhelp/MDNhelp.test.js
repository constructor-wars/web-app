import React from "react";
import MDNhelp from "./MDNhelp";
import renderer from "react-test-renderer";

describe("MDNhelp", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<MDNhelp />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
