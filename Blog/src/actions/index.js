import axios from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // PREVIOUS SETUP
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  //LODASH CHAIN SETUP
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await axios.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};
export const fetchUser = id => async dispatch => {
  const response = await axios.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};

// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };

// // **MEMOIZATION**
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await axios.get(`/users/${id}`);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// });
