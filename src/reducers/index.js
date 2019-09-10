import { ADD_PROFILE } from '../actions/types';

const initialState = {
  user: {
    fullName: 'João Victor de Souza Poletti',
    age: '23',
    email: 'jvpoletti@gmail.com',
    cityState: 'Distrito Federal',
    city: 'Brasília',
    address: 'SHTQ, QD 4, CONJ 5, CASA 16 TAQUARI',
    phone: '(61) 99907-6862',
    username: 'jvpoletti',
    password: '12345',
  },
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PROFILE:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};

export default userReducer;
