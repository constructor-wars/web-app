import React from 'react';
import NavbBarProfile from './NavBarProfile';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from 'enzyme';

describe('navprofilebar', () => {
  it('it matches and update progress', () => {
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
            <NavbBarProfile />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
