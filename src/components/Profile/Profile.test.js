import React from "react";
import Profile from "./Profile";
import renderer from "react-test-renderer";

describe("Welcome", () => {
  it("matches the snapshot", () => {
    const user = {
      username: "pp",
      displayName: "wer",
      profileUrl: "ht"
    };
    const tree = renderer.create(<Profile {...user} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<div>
  <div
    className="profile__container"
  >
    <img
      className="profileImg"
    />
    <p>
      Username:
      pp
    </p>
    <p>
      displayName:
      wer
    </p>
    <a
      href="ht"
    >
      Github url:
      ht
    </a>
  </div>
</div>
`);
  });
});
