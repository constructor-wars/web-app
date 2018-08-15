import React from "react";
import AskDimi from "./AskDimi";
import renderer from "react-test-renderer";

describe("AskDimi", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<AskDimi />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<a
  href="https://api.whatsapp.com/send?text=help"
>
  <div
    className="profile__askD"
  >
    Ask me a question when you get stuck
    <img
      alt="May you questions get answered"
      className="dmitri"
      src="test-file-stub"
    />
  </div>
</a>
`);
  });
});
