import {
  GET_LINK_LIST,
  ADD_LINK,
  UP_VOTE_LINK,
  DOWN_VOTE_LINK,
  DELETE_LINK,
  EDIT_LINK,
} from './types';

export const getLinkList = () => ({
  type: GET_LINK_LIST,
  payload: '',
});

export const addLink = (link) => ({
  type: ADD_LINK,
  payload: link,
});

export const upVote = (id) => ({
  type: UP_VOTE_LINK,
  payload: id,
});

export const downVote = (id) => ({
  type: DOWN_VOTE_LINK,
  payload: id,
});

export const editLink = (id, newLink) => ({
  type: EDIT_LINK,
  payload: {
    id,
    link: newLink,
  },
});

export const deleteLink = (id) => ({
  type: DELETE_LINK,
  payload: id,
});
