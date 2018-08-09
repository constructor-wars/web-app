import 'whatwg-fetch';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
global.fetch = require('jest-fetch-mock');
import { allQuestionsAction } from '../../_Redux/actions/actions';
import { allQuestions } from '../reducers/index';
import { fetchAllQuestions } from './actions';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// const mockResponse = (status, statusText, response) => {
//   return new window.Response(response, {
//     status: status,
//     statusText: statusText,
//     headers: {
//       'Content-type': 'application/json'
//     }
//   });
// };

// describe('Actions testing', () => {
//   const store = mockStore({ name: 'name' });
//   it('action returns all questions', () => {
//     global.fetch = jest
//       .fn()
//       .mockImplementation(() =>
//         Promise.resolve(mockResponse(200, null, { name: 'name' }))
//       );

//     return store.dispatch(fetchAllQuestions()).then(() => {
//       const expectedActions = store.getActions();
//       expect(expectedActions.length).toBe(1);
//     });
//   });
// });

describe('allQuestionsAction action', () => {
  it('set all questions to store', () => {
    const expected = {
      type: 'ALL_QUESTIONS',
      payload: 'all Questions payload'
    };

    expect(allQuestionsAction('all Questions payload')).toEqual({
      payload: 'all Questions payload',
      type: 'ALL_QUESTIONS'
    });

    expect(allQuestionsAction('test object')).toEqual({
      payload: 'test object',
      type: 'ALL_QUESTIONS'
    });
  });
});
