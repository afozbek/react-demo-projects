import {
  addLink,
  deleteLink,
  downVote,
  upVote,
} from '../store/linkList/actions';

import { clearNotify, notify } from '../store/notification/actions';
import { CLEAR_NOTIFY, NOTIFY } from '../store/notification/types';

import {
  ADD_LINK,
  DELETE_LINK,
  UP_VOTE_LINK,
  DOWN_VOTE_LINK,
} from '../store/linkList/types';

describe('actions', () => {
  it('should create an action to add a link', () => {
    const link = { id: 1, text: 'Deneme', created_time: new Date().getTime() };
    const expectedAction = {
      type: ADD_LINK,
      payload: link,
    };
    expect(addLink(link)).toEqual(expectedAction);
  });

  it('should create an action to delete a link', () => {
    const id = 1;
    const expectedAction = {
      type: DELETE_LINK,
      payload: id,
    };
    expect(deleteLink(id)).toEqual(expectedAction);
  });

  it('should create an action to upVote a link', () => {
    const id = 1;
    const expectedAction = {
      type: UP_VOTE_LINK,
      payload: id,
    };
    expect(upVote(id)).toEqual(expectedAction);
  });

  it('should create an action to downVote a link', () => {
    const id = 1;
    const expectedAction = {
      type: DOWN_VOTE_LINK,
      payload: id,
    };
    expect(downVote(id)).toEqual(expectedAction);
  });

  it('should create an action to notify', () => {
    const text = 'Başarılı bir şekilde oluştu.';
    const expectedAction = {
      type: NOTIFY,
      payload: { text },
    };
    expect(notify({ text })).toEqual(expectedAction);
  });

  it('should create an action to clear notify', () => {
    const expectedAction = {
      type: CLEAR_NOTIFY,
    };
    expect(clearNotify()).toEqual(expectedAction);
  });
});
