import React from "react";
import Footer from "./Footer";
import renderer from "react-test-renderer";

describe("Footer", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<div
  className="footer_container"
>
  <span>
    🇭🇰 🇵🇱 󠁧󠁢󠁥󠁮󠁧󠁿🇬🇧 󠁧󠁢󠁥󠁮󠁧󠁿🇱🇹 🇪🇸󠁧󠁢󠁥 
  </span>
</div>
`);
  });
});
