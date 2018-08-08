import React from "react";
import Questions from "./Questions";

import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

const quesitons = [
  {
    id: 1,
    question_tile: "sefsdfs",
    test: "tobe equlal to()",
    difficulty_id: 1,
    category_id: 1,
    instruction: "play with it baby camel",
    link_syllabus: "https:findthecamel.com/babycamel",
    initial_code: "skhhfkshfkhsf"
  },
  {
    id: 2,
    question_tile: "anthoeronf",
    test: "tobe equlal to()",
    difficulty_id: 2,
    category_id: 2,
    instruction: "play with it baby camel",
    link_syllabus: "https:findthecamel.com/babycamel",
    initial_code: "skhhfkshfkhsf"
  }
];

test("qeustions snapshot", () => {
  const mockStore = configureStore();
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider
          store={mockStore({
            GITHUB_DATA: {
              id: 10,
              displayName: "bob",
              profileUrl: "bob2",
              username: "bob 3",
              photos: [{ value: "bob4" }]
            }
          })}
        >
          <Questions questions={quesitons} />
        </Provider>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
