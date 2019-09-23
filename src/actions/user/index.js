import firestore from '@react-native-firebase/firestore';

import { ADD_PROFILE } from './types';

export const addProfile = (user) => async (dispatch) => {
  const userRef = firestore()
    .collection('users');

  const userObject = {
    fullName: user.fullName,
    age: user.age,
    email: user.email,
    city: user.city,
    cityState: user.cityState,
    address: user.address,
    phone: user.phone,
    username: user.username,
  };

  await userRef.add(userObject);


  dispatch({
    type: ADD_PROFILE,
    payload: userObject,
  });
};
