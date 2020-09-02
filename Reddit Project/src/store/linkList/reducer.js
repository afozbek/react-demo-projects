import {
  GET_LINK_LIST,
  ADD_LINK,
  UP_VOTE_LINK,
  DOWN_VOTE_LINK,
  DELETE_LINK,
  EDIT_LINK,
} from './types';

const initialState = JSON.parse(localStorage.getItem('linkList')) || [];

export const linkListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LINK_LIST:
      return getLinkList(action.payload);

    case ADD_LINK:
      return addLink(state, action.payload);

    case UP_VOTE_LINK:
      return upVoteLink(state, action.payload);

    case DOWN_VOTE_LINK:
      return downVoteLink(state, action.payload);

    case EDIT_LINK:
      return editLink(state, action.payload);

    case DELETE_LINK:
      return deleteLink(state, action.payload);
    default:
      return state;
  }
};

const getLinkList = (linkList) => {
  const newState = [...linkList];

  return newState;
};

const addLink = (state, link) => {
  localStorage.setItem('linkList', JSON.stringify([...state, link]));

  return [...state, link];
};

const upVoteLink = (state, id) => {
  const newState = state.map((link) => {
    if (link.id === id) {
      return {
        ...link,
        points: link.points + 1,
        last_voted_time: new Date().getTime(),
      };
    }
    return link;
  });

  localStorage.setItem('linkList', JSON.stringify(newState));

  return newState;
};

const downVoteLink = (state, id) => {
  const newState = state.map((link) => {
    if (link.id === id && link.points >= 1) {
      return {
        ...link,
        points: link.points - 1,
        last_voted_time: new Date().getTime(),
      };
    }
    return link;
  });

  localStorage.setItem('linkList', JSON.stringify(newState));

  return newState;
};

const editLink = (state, payload) => {
  const { id, link } = payload;

  const newState = state.map((l) => {
    if (l.id === id) {
      return {
        ...l,
        text: link.text,
        url: link.url,
      };
    }
    return l;
  });

  localStorage.setItem('linkList', JSON.stringify(newState));

  return newState;
};

const deleteLink = (state, id) => {
  const newState = state.filter((link) => link.id !== id);

  localStorage.setItem('linkList', JSON.stringify(newState));

  return newState;
};
