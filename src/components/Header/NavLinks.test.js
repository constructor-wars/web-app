import React from 'react';
import { Router } from 'react-router-dom';
import { NavLinks } from './NavLinks';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('NavLinks', () => {
  it('matches the snapshot', () => {
    const mockStore = configureStore();
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider
            store={mockStore({
              GITHUB_DATA: {
                id: 10,
                displayName: 'bob',
                profileUrl: 'bob2',
                username: 'bob 3',
                photos: [{ value: 'bob4' }]
              }
            })}
          >
            <NavLinks />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it("tests NavLinks component", () => {
  //   const wrapper = shallow(
  //     <Router>
  //       <NavLinks />
  //     </Router>
  //   );
  //   const text = wrapper.find("div").text();
  //   expect(text).toEqual("NavLinks");
  // });
});
