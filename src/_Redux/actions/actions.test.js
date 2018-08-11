// import 'whatwg-fetch';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
global.fetch = require('jest-fetch-mock');
import { allQuestionsAction, fetchAllQuestions } from './actions';
import { allQuestions } from '../reducers/index';
import {
  userDataAction,
  userProgressAction,
  sendQuestionToDatabaseAction
} from './actions';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe('testing API under fetchAllQuestions', () => {
//   beforeEach(() => {
//     fetch.resetMocks();
//   });

//   it('calls databse for all questions', () => {
//     fetch.mockResponseOnce(
//       JSON.stringify({ id: 1, title: 'test questions', level: 3 })
//     );

//     const action = fetchAllQuestions();

//     action().then(response => {
//       expect(response).toEqual({ id: 1, title: 'test questions', level: 3 });
//     });
//   });
// });

// const mockResponse = (status, statusText, response) => {
//   return new global.Response(response, {
//     status: status,
//     statusText: statusText,
//     headers: {
//       'Content-type': 'application/json'
//     }
//   });
// };

// describe('fetch testing', () => {
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
    const action = {
      type: 'ALL_QUESTIONS',
      payload: 'test'
    };

    const expected = {
      type: 'ALL_QUESTIONS',
      payload: 'all Questions payload'
    };

    expect(allQuestionsAction('all Questions payload', action)).toEqual({
      payload: 'all Questions payload',
      type: 'ALL_QUESTIONS'
    });

    expect(allQuestionsAction('test object', action)).toEqual({
      payload: 'test object',
      type: 'ALL_QUESTIONS'
    });

    expect(allQuestionsAction('test')).toEqual({
      payload: 'test',
      type: 'ALL_QUESTIONS'
    });
  });
});

describe('actions passing payload to update user', () => {
  it('send userdata to reducer', () => {
    const action = {
      type: 'USER_DATA',
      payload: 'test'
    };
    expect(userDataAction('test', action)).toEqual({
      payload: 'test',
      type: 'USER_DATA'
    });
  });
});

describe('action test for profile progress', () => {
  it('redux getting prgress data', () => {
    const action = {
      type: 'USER_PROGRESS',
      payload: { count: 19 }
    };

    expect(userProgressAction({ count: 19 }, action)).toEqual({
      type: 'USER_PROGRESS',
      payload: { count: 19 }
    });
  });
});

describe('testing admin page to submit questions', () => {
  it('it sends JSON to database as new question', () => {
    const action = {
      type: 'SEND_QUESTION_TO_DATABASE',
      payload: {
        question: 1,
        difficulty: 2,
        level: 3
      }
    };

    expect(
      sendQuestionToDatabaseAction(
        {
          question: 1,
          difficulty: 2,
          level: 3
        },
        action
      )
    ).toEqual({
      payload: { difficulty: 2, level: 3, question: 1 },
      type: 'SEND_QUESTION_TO_DATABASE'
    });
  });
});
