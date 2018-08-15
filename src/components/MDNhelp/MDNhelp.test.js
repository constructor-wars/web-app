import React from "react";
import MDNhelp, { SearchResultList } from "./MDNhelp";
import renderer from "react-test-renderer";

describe("MDNhelp", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<MDNhelp />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<div
  className="searchbar__wrapper"
>
  <input
    className="searchbar__bar"
    onChange={[Function]}
    placeholder="Feeling stuck..? Let MDN help..."
    value=""
  />
  <button
    className="searchbar__button"
    onClick={[Function]}
    type="Submit"
  >
    Submit
  </button>
  <ul />
</div>
`);
  });

  it("matches the snapshot", () => {
    const data = [
      { textContent: "one", href: "http://mdn.com/1" },
      { textContent: "two", href: "http://mnd.com/2" }
    ];
    const tree = renderer.create(<SearchResultList data={data} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
Array [
  <li
    className="search__links"
  >
    <a
      className="search__links__text"
      href="http://mdn.com/1"
      target="_blank"
    >
      one
    </a>
  </li>,
  <li
    className="search__links"
  >
    <a
      className="search__links__text"
      href="http://mnd.com/2"
      target="_blank"
    >
      two
    </a>
  </li>,
]
`);
  });
});
