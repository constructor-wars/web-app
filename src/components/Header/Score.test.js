import React from "react";
import Score from "./Score";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Score", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Score />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("tests score component", () => {
    const wrapper = shallow(<Score />);
    const text = wrapper.find("div").text();
    expect(text).toEqual("Score");
  });
});
