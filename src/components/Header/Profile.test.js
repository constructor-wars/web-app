import React from "react";
import Profile from "./Profile";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Profile", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Profile />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("tests profile component", () => {
    const wrapper = shallow(<Profile />);
    const text = wrapper.find("div").text();
    expect(text).toEqual("Profile");
  });
});
