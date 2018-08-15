import React from "react";
import Edit from "./Edit";
import renderer from "react-test-renderer";

describe("Edit", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Edit />).toJSON();
    expect(tree).toMatchInlineSnapshot();
  });
});
