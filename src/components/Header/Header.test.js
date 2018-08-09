import React from 'react';
import './StyleHeader.css';
import Header from './Header';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from 'enzyme';

describe('Header', () => {
  test('matches the snapshot', () => {
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
            <Header />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Header has NavLinks', () => {
    const mockStore = configureStore();
    const wrapper = render(
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
          <Header />
        </Provider>
      </MemoryRouter>
    );
    const text = wrapper.find('.nav_links').text();
    expect(text).toBe(
      ' Start Coding Dashboard  Syllabus  About  Logout  Admin'
    );
  });
});
