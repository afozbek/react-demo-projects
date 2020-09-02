import { CLEAR_NOTIFY, NOTIFY } from '../store/notification/types';

import {
  ADD_LINK,
  DELETE_LINK,
  UP_VOTE_LINK,
  DOWN_VOTE_LINK,
} from '../store/linkList/types';

import { linkListReducer } from '../store/linkList/reducer';
import { notificationReducer } from '../store/notification/reducer';

const initialState = JSON.parse(localStorage.getItem('linkList')) || [];

describe('Reducers', () => {
  it('should return the initial state', () => {
    expect(linkListReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle addLink', () => {
    expect(
      linkListReducer([], {
        type: ADD_LINK,
        payload: { id: 1, text: 'Deneme' },
      })
    ).toEqual([{ id: 1, text: 'Deneme' }]);
  });

  it('should handle removeLink', () => {
    const newState = linkListReducer([{ id: 1, text: 'Deneme' }], {
      type: DELETE_LINK,
      payload: { id: 1 },
    });

    expect(
      linkListReducer([{ id: 1, text: 'Deneme' }], {
        type: DELETE_LINK,
        payload: 1,
      })
    ).toEqual([]);
  });

  it('should handle upvote link', () => {
    expect(
      linkListReducer(
        [
          { id: 1, text: 'Deneme', points: 0 },
          { id: 2, text: 'Deneme1', points: 1 },
        ],
        {
          type: UP_VOTE_LINK,
          payload: 2,
        }
      )
    ).toEqual([
      { id: 1, text: 'Deneme', points: 0 },
      {
        id: 2,
        text: 'Deneme1',
        points: 2,
        last_voted_time: new Date().getTime(),
      },
    ]);
  });

  it('should handle downVote link', () => {
    expect(
      linkListReducer(
        [
          { id: 1, text: 'Deneme', points: 0 },
          { id: 2, text: 'Deneme1', points: 3 },
        ],
        {
          type: DOWN_VOTE_LINK,
          payload: 2,
        }
      )
    ).toEqual([
      { id: 1, text: 'Deneme', points: 0 },
      {
        id: 2,
        text: 'Deneme1',
        points: 2,
        last_voted_time: new Date().getTime(),
      },
    ]);
  });

  it('should handle downVote link-2', () => {
    expect(
      linkListReducer(
        [
          { id: 1, text: 'Deneme', points: 0 },
          { id: 2, text: 'Deneme1', points: 0 },
        ],
        {
          type: DOWN_VOTE_LINK,
          payload: 2,
        }
      )
    ).toEqual([
      { id: 1, text: 'Deneme', points: 0 },
      { id: 2, text: 'Deneme1', points: 0 },
    ]);
  });

  const notificationInitialState = {
    showNotification: false,
    text: '',
    displayTime: 2000,
    hasError: false,
  };
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(
      notificationInitialState
    );
  });

  it('should handle notify', () => {
    expect(
      notificationReducer(
        {
          showNotification: false,
          text: '',
          displayTime: 2000,
        },
        {
          type: NOTIFY,
          payload: { text: 'TEXT' },
        }
      )
    ).toEqual({
      showNotification: true,
      text: 'TEXT',
      hasError: false,
      displayTime: 2000,
    });
  });

  it('should handle clear notify', () => {
    expect(
      notificationReducer(
        {
          showNotification: false,
          text: '',
          displayTime: 2000,
        },
        {
          type: CLEAR_NOTIFY,
        }
      )
    ).toEqual(notificationInitialState);
  });
});
