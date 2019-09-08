import { ADD_PROFILE } from './types';

export const addProfile = (fields) => ({
  type: ADD_PROFILE,
  payload: { fields },
});
