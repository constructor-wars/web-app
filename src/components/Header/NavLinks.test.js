import React from "react";
import { Router } from "react-router-dom";
import NavLinks from "./NavLinks";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe.skip("NavLinks", () => {
  it("matches the snapshot", () => {
    const tree = renderer
      .create(
        <Router>
          <NavLinks />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("tests NavLinks component", () => {
    const wrapper = shallow(
      <Router>
        <NavLinks />
      </Router>
    );
    const text = wrapper.find("div").text();
    expect(text).toEqual("NavLinks");
  });
});
