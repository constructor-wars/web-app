import React from "react";
import { shallow } from "enzyme"; // import shallow renderer from enzyme

function Like(props) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

describe("Like component", () => {
  it("starts with a count of 0", () => {
    const wrapper = shallow(<Like name={"Movie has 0 likes"} />); // perform shallow render of Like
    const text = wrapper.find("span").text(); // extract text in span
    expect(text).toEqual("Movie has 0 likes");
  });
});
