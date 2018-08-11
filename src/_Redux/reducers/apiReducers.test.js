import React from 'react';
import { userByUsername, sendQuestionToDatabase } from './apiReducers';

describe('reducer passing username to redux', () => {
  it('username reducer', () => {
    const initialState = { nothing: '0' };
    const action = {
      type: 'USER_BY_USERNAME',
      payload: 'username1'
    };

    const expected = 'username1';
    const outputState = userByUsername(initialState, action);

    expect(outputState).toEqual(expected);

    const defaultAction = {
      type: 'XXX',
      payload: 'username2'
    };

    expect(userByUsername(initialState, defaultAction)).toEqual({
      nothing: '0'
    });
  });
});

describe('question submission to database', () => {
  it('send JSON to databse', () => {
    const initialState = {};
    const action = {
      type: 'SEND_QUESTION_TO_DATABASE',
      payload: {
        question: 1,
        level: 2,
        category: 3
      }
    };

    const expectedState = {
      question: 1,
      level: 2,
      category: 3
    };

    expect(sendQuestionToDatabase(initialState, action)).toEqual(expectedState);
  });
});
