import { ADD_PROFILE } from '../actions/types';

const initialState = {
  full_name: '',
  age: '',
  email: '',
  city_state: '',
  city: '',
  address: '',
  phone: '',
  username: '',
  password: '',
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        full_name: action.payload.fields.full_name,
        age: action.payload.fields.age,
        email: action.payload.fields.email,
        city_state: action.payload.fields.city_state,
        city: action.payload.fields.city,
        address: action.payload.fields.address,
        phone: action.payload.fields.phone,
        username: action.payload.fields.username,
        password: action.payload.fields.password,
      };
    default:
      return state;
  }
};

export default registerReducer;
