import firestore from '@react-native-firebase/firestore';
import { ADD_PROFILE } from './types';

export const addProfile = (user) => (dispatch) => {
  const userRef = firestore().collection('users');

  console.log('Gravando user: ', user);
  console.log('User Ref: ', userRef.doc('tbCmYqZJ6dhHqc58Lzm5').get());

  userRef.add({
    fullName: user.fullName,
    age: user.age,
    email: user.email,
    city: user.city,
    cityState: user.cityState,
    address: user.address,
    phone: user.phone,
    username: user.username,
  });

  dispatch({
    type: ADD_PROFILE,
    payload: user,
  });
};
