import { ADD_PROFILE } from './types';

export const addProfile = (user) => ({
  type: ADD_PROFILE,
  payload: { user },
});
