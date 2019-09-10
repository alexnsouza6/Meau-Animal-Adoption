import { ADD_PROFILE } from '../actions/types';

const initialState = {
  full_name: 'João Victor de Souza Poletti',
  age: '23',
  email: 'jvpoletti@gmail.com',
  city_state: 'Distrito Federal',
  city: 'Brasília',
  address: 'SHTQ, QD 4, CONJ 5, CASA 16 TAQUARI',
  phone: '(61) 99907-6862',
  username: 'jvpoletti',
  password: '12345',
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
