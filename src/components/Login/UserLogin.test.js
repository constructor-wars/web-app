import React from "react";
import UserLogin from "./UserRegister";
import renderer from "react-test-renderer";

describe("UserLogin", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<UserLogin />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
