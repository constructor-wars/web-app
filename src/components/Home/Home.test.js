import React from "react";
import Home from "./Home";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Home", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("tests home component", () => {
    const wrapper = shallow(<Home />);
    const text = wrapper.find("div").text();
    expect(text).toEqual("Home component");
  });
});
