import React from "react";
import UserRegister from "./UserRegister";
import renderer from "react-test-renderer";

describe("UserLogin", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<UserRegister />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
