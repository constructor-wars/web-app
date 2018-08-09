import React from "react";
import ProgressBar from "./ProgressBar";
import renderer from "react-test-renderer";

describe("ProgressBar", () => {
  it("matches the snapshot", () => {
    const values = {
      current: 20,
      total: 80
    };
    const tree = renderer.create(<ProgressBar {...values} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<div
  className="profile__progress__bar"
>
  <h2>
    You current progress
  </h2>
  <div
    className="progress__bar"
  >
    <div
      className="progress__bar__filler"
      style={
        Object {
          "width": "25%",
        }
      }
    />
  </div>
</div>
`);
  });
});
