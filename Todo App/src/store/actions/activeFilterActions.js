import {
  CHANGE_ACTIVE_FILTER
} from "./types";

// ACTIVE FILTER
const changeActiveFilter = filter => ({
  type: CHANGE_ACTIVE_FILTER,
  filter
});

export {
  changeActiveFilter
};