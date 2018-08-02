import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";
import { shallow, render } from "enzyme"; // import shallow renderer from enzyme

describe("Header", () => {
  test("matches the snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render has Score", () => {
    const wrapper = render(<Header />);
    const text = wrapper.find(".score").text();
    expect(text).toEqual("Score");
  });
});
