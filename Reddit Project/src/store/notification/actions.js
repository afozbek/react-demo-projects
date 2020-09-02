import { NOTIFY, CLEAR_NOTIFY } from './types';

export const notify = (notificationObj) => ({
  type: NOTIFY,
  payload: notificationObj,
});

export const clearNotify = () => ({
  type: CLEAR_NOTIFY,
});
