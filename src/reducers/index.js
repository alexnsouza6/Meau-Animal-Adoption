import { ADD_PROFILE } from '../actions/types';

const initialState = {};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PROFILE:
      return {
        state,
        user: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
