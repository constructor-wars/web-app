import React from "react";
import Instructions from "./Instructions";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Instructions", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(<Instructions data="MockInstructions" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("tests instructions component", () => {
    const wrapper = shallow(<Instructions data="MockInstructions" />);
    const text = wrapper.find("div").text();
    expect(text).toEqual("MockInstructions");
  });
});
